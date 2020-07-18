const mongoose = require("mongoose");
const db = require("../models");
const { setMaxListeners } = require("../models/User");
const { response } = require("express");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/dogwalkapp"
);

const dogSeed = [
    {
        dogname: 'Gus',
        breed: 'Pug',
        sex: 'Male',
        weight: '17',
        description: 'A Super Friendly Pug'
    },
    {
        dogname: 'CPT Sparrow',
        breed: 'German Shepard',
        sex: 'Male',
        weight: '85',
        description: 'No one Catches CPT Sparrow'
    }
];

db.Dog
    .remove({}).then(() => db.Dog.collection.insertMany(dogSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    }).catch(e => {console.error(e);
        process.exit(1);    
    });