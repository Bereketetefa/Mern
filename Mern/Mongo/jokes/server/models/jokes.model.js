const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required:[true,"This is how we validate"],
        minlength: [3,"Setup has to be more than 2 characters"]
    },
    punchline: String
},{timestamps:true})

const Joke = mongoose.model("Joke",JokeSchema);

module.exports = mongoose.model("Joke", JokeSchema)
