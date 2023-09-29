/* const { Videogame } = require("../db");

const postGame = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  postGame,
};
 */

/* const { Videogame, Genre } = require('../db'); // Importa tus modelos de Sequelize

const postGame = async (req, res) => {
  try {
    // Extrae los datos necesarios del cuerpo de la solicitud (req.body)
    const { name, description, platForms, background_image, released,rating,genres } = req.body;

    // Verifica que se proporcionen al menos un género
    if ( !name || !description || !platForms|| !background_image|| !released||!rating ||!genres) {
      throw Error('Faaaaaltan datos')
    }

    // Crea el videojuego en la base de datos
    const newVideogame = await Videogame.create({
      name, description, platForms, background_image, released,rating,genres
    });

    // Asocia los géneros al videojuego
    await newVideogame.addGenres(Genre);

    return res.status(201).json(newVideogame);
  } catch (error) {
    console.error('Error al crear el videojuego:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = {
  postGame,
}; */
//todo ultimo comentado
/* const { Videogame, Genre } = require('../db');
const postGame = async (req, res) => {
  try {
    const { name, description, platForms, background_image, released,rating,genres } = req.body;

    if (!name || !description || !platForms|| !background_image|| !released||!rating ||!genres) {
      throw Error('Faltan datos')
    }

     await Videogame.create({
      name, 
      description,
      platForms,
      background_image, 
      released,
      rating
    });
    const newVideogame = await Videogame.findAll()
    console.log(newVideogame);

    // Encuentra o crea los géneros para el videojuego nuevo
    for (let genreName of genres) {
      // Buscamos el género en la base de datos
      const genreInstance = await Genre.findOrCreate({
        where: { name: genreName }
      });

      // Asociamos el género al videojuego nuevo
      await newVideogame.addGenre(genreInstance[0]);
    }

    return res.status(201).json(newVideogame);
  } catch (error) {
    console.error('Error al crear el videojuego:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = {
  postGame,
}; */

/* const {Videogame}= require('../db')

const postGame = async (name,description,released)=>{
  const newGames = Videogame.create({name,description,released})
  if(!name||!description||!released) res.status(400).send('conchudo faltan datos')

return res.status(200).json(newGames)
}

module.exports ={postGame} */
/* const {Videogame,Genre} = require('../db')

const postGame = async (req,res)=>{
const { name, genres } = req.body;
const newVideogame = await Videogame.create({ name });

genres.forEach(async (id) => {
    const genre = await Genre.findByPk(id);
    await newVideogame.addGenre(genre);
});

res.send(newVideogame);
}

module.exports ={
  postGame
} */
const { Videogame, Genre } = require('../db');

const postGame = async (req, res) => {
  try {  
    const { name, description, platforms, background_image, released, rating, genres } = req.body;

    // Verificamos si los géneros existen en la base de datos
    const existingGenres = await Genre.findAll({ where: { name: genres } });

    // Si no existen, puedes crearlos aquí o manejarlo según tus necesidades
 

    // Crear el videojuego en la base de datos
    const createdVideogame = await Videogame.create({
      name, description, platforms, background_image, released, rating
    });

    // Relaciono el videojuego con los géneros
    await createdVideogame.addGenres(existingGenres);
    
    res.status(201).json(createdVideogame);
  } catch (error) {
    res.status(400).json({ error: 'Faltan datos en la creacion del videogames'});
  }
};

module.exports = {
  postGame,
};