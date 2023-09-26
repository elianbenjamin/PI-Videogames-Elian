/* const {getGame} =require('../controllers/getGame')


const getHandlers = (_req,res) => {
    try {
        
        const displayGames = getGame()
        res.status(200).json(displayGames)
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }

}
module.exports = {getHandlers} */