var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Schema = new Schema({
    playerName:{
        type:String,
        require:true
    },
    playerWins:{
        type:Number,
        require:true
    },
    gamesPlayed:{
        type:Number,
        require:true
    }
});

mongoose.model("game", Schema);