const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    Title: { type: String },
    Price: { type: Number },
    Description: { type: String}
}, { timestamps: true });
module.exports.Person = mongoose.model('Person', PersonSchema);
