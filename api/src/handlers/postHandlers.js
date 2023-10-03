/* const { postGame } = require("../controllers/postGame");


const postHandlers = async (req,res)=>{
    const {name,description,platforms,background_image,released,rating,genres}= req.body;
    try {
        if(!name||!description||!platforms||!background_image||!released||!rating||!genres) throw Error("Missing data");
    const newVideoGame = await postGame(name,description,platforms,background_image,released,rating,genres);
    
    res.status(201).json(newVideoGame);
        console.log(newVideoGame.dataValues);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}
module.exports = {postHandlers} */