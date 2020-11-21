const data = require("./data/top50");



const handleSound =  (req, res) =>{

    const songRank = req.params.rank;
    const song = data.top50.filter(elm => (elm.rank == songRank))
    


    if(song.length === 0){

        res.status(404).json({
            status: 404,
            message: "song not found."
        })
    } 

    res.status(200).json({
        status: 200,
        data : song
    })    
}


module.exports=  handleSound ;