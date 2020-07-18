const mongoose = require("mongoose");

const DogsSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    dogname: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String
    },
    // picture: {
    //     data: Buffer,
    //     contentType: String
    // },
    breed: {
        type: String,
        trim: true
    },
    sex: {
        type: String
    },
    weight: {
        type: Number
    }
});

const Dog = mongoose.model('Dog', DogsSchema);
module.exports = Dog;