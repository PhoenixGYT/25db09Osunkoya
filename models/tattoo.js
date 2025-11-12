const mongoose = require("mongoose")
const tattooSchema = mongoose.Schema({
    customer: String, 
    duration: Number,
    cost: Number,  
    colored: Boolean 
})
module.exports = mongoose.model("Tattoo", tattooSchema)