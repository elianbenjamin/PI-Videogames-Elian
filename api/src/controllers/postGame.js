const { Videogame, Genre } = require('../db');

const postGame = async (req, res) => {
  try {  
    const { name, description, platforms, background_image, released, rating, genres } = req.body;
    
    const existingGenres = await Genre.findAll({ where: { name: genres } });

    const createdVideogame = await Videogame.create({
      name, description, platforms, background_image, released, rating, genres
    });
    

    await createdVideogame.addGenres(existingGenres);
    
    res.status(201).json(createdVideogame);
  } catch (error) {
    res.status(400).json({ error: 'Faltan datos en la creacion del videogames'});
  }
};

module.exports = {
  postGame,
};