const mongoose = require("mongoose")
const tattooSchema = mongoose.Schema({
    customer: String, 
    duration: {
        type: Number,
        MinKey: 1
    },
    cost: {
        type: Number,  
        MinKey: 80
    },
    colored: Boolean 
})
module.exports = mongoose.model("Tattoo", tattooSchema)