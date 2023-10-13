const axios  = require("axios");
const { Genre } = require("../db");


const getGenre = async (_req, res) => {
  try {
    let genresDb = await Genre.findAll();  
  

    
    if (!genresDb.length) {
        const genresApi = await axios.get('https://api.rawg.io/api/genres?key=c0b6dc79f407436cbcf3ca1f02d1e6a8');
        genresDb = await Genre.bulkCreate(genresApi.data.results);
        
    }

    res.send(genresDb);
  } catch (error) {
    res.status(400).json({error: 'No hay generos'})
  }
};

module.exports = {
  getGenre,
};
