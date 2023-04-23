const mongoose = require("mongoose")

const Schema = mongoose.Schema

const PlanSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String

    },
    price: {
        type: Number,
        min: 0,
        required: true
    },

    duration: {
        type: Number,
        required: true,
        min: 1,
        max: 30,
    },
    isActive: {
        type: Boolean,
        enum: [true, false],
        default: true,

    }

})

module.exports = mongoose.model('Plan', PlanSchema)