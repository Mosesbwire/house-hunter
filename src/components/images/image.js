const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    listing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing',
        required: true
    },
    imageBuffer: {
        type: String,
        required: true
    },
    mimeType: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Image', imageSchema);