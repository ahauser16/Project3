const mongoose = require("mongoose");

const WalksSchema = new mongoose.Schema({
    dogname: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DogSchema"
    },
    savedWalk: {
        type: Array
    },
    savedSpots: {
        type: Array
    },
    estimatedTime: {
        type: Number
    },
    timeTaken: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Walks = mongoose.model('Walks', WalksSchema);
module.exports = Walks;