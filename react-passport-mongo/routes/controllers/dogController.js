const db = require("../../models");
const { Dog, User } = require("../../models");
// const { default: user } = require("../../client/src/utils/API/user");

// const fs = require('fs');
// const multer = require('multer');
// const path = require('path');


// const storage = multer.diskStorage({
//     destination: './public',
//     filename: (req,res,cb) => {
//         cb(null, "image-" + Date.now() + '-whereWalk' + path.extname(Dog.picture.originalname))
//     }
// });

// const upload = multer({
//     storage: storage,
//     limits:{fileSize: 1000000},
// }).single("picture");

// const imageObj = (req,res) => {
//     upload(req, res, () => {
//         console.log("body: ", req.body );
//         console.log("file: ", req.file);
//         const file= new File();
//         file.picture = req.file;
//         file.save().then(() => {
//             res.send({message: "image uploaded"})
//         })
//     })
// };

module.exports = {
    findAll: function(req, res) {
        db.Dog.find().then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: async (req, res, next) => {
        console.log(req.params);
        user = (req.params);
        console.log(req.session);
        if(req.session.user){
        id = req.session.user._id;
        const {dogname, breed, age, sex, weight, description} = req.body;
        const dog = await Dog.create({
            dogname,
            breed,
            age,
            sex,
            weight,
            description,
            owner:id,
            // picture: imageObj
            // {
            //     data: fs.readFileSync(
            //         path.join(__dirname + req.body.picture)),
            //         contentType: 'image/png'
            // }
        });
        await dog.save();

        const userById = await User.findById(id);
        userById.dogname.push(dog);
        await userById.save();
        return res.send(userById);
    }else{
        // res.status(401).json(new Error ("no user"));
        res.status(401);
        next(new Error ("no user"));
    }
        // db.Dog.create(req.body).then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err))
    },
    userByDog : async (req, res) => {
        const {id} = req.params;
        const userByDog = await Dog.findById(id).populate(user);
        res.send(userByDog);
    },
    update: function(req, res){
        db.Dog.findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    remove: function(req, res){
        db.Dog.findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
};