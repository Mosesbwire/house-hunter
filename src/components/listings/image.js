const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    listing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing',
        required: true
    },
    images: []
})

module.exports = mongoose.model('Image', imageSchema);