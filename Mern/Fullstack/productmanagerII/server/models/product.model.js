console.log("product.model.js");

const mongoose = require("mongoose");

const productschema = new mongoose.Schema({

    Title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be 2 characters or longer"]
    },
    Price: {
        type: Number,
        required: [true, "Price is required"],
    },
    Description: {
        type: String,
        required: [true, "Description is requires"],
        minlength: [10, "Description must be 10 characters or longer"]
    }
}, {timestamps: true});

module.exports = mongoose.model("product", productschema);