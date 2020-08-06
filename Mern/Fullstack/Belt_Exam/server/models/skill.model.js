console.log("skill.model.js");

const mongoose = require("mongoose");

const skillschema = new mongoose.Schema({

    Name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be 3 characters or longer "],
        unique: [ true, "Name must be unique"]
    },
    Type: {
        type: String,
        required: [true, "Type is required"],
        minlength: [3, "Type must be 3 characters or longer"]
    },
    Description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be 3 characters or longer"]
    },
    Skill1: {
        type: String,
        // required: [true, "Description is requires"],
        // minlength: [10, "Description must be 10 characters or longer"]
    },
    Skill2: {
        type: String,
        // required: [true, "Description is requires"],
        // minlength: [ "Description must be 10 characters or longer"]
    },
    Skill3: {
        type: String,
        // required: [true, "Description is requires"],
        // minlength: [10, "Description must be 10 characters or longer"]
    },
    likes: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

module.exports = mongoose.model("skill", skillschema);