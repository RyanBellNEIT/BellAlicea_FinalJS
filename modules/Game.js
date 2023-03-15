var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Schema = new Schema({
    playerName:{
        type:String,
        require:true
    },
    playerWins:{
        type:String,
        require:true
    },
    gamesPlayed:{
        type:String,
        require:true
    }
});

mongoose.model("game", Schema);