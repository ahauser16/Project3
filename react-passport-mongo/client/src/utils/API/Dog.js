import axios from "axios";

export default{
    getDogs: function(dog) {
        return axios.get("/api/dogs", dog)
    },
    create: function(dog){
        return axios.post("/api/dogs/create/:id", dog)
    },
    userByDog: function(dog){
        return axios.post("/api/dogs/populate", dog)
    },
    updateDog: function(dog){
        return axios.put("/api/dogs/update/:id", dog)
    },
    removeDog: function(dog){
        return axios.delete("/api/dogs/remove", dog)
    }
}