const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create Schema

const vegetableSchema = new Schema({
    name: {type: String, required: true},
    isGreen: Boolean
},
{timestamps: true}
)

const Vegetable = mongoose.model('Vegetable', vegetableSchema)


//Export Vegetable Model
module.exports = Vegetable