const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ListingSchema = new Schema({
    
    name: {
        type: String,
    },
    geoLocation: {
        type: {
            latitude: Number,
            longitude: Number,
        },
        required: true
    },
    location: {
        mainLocation: {
            type: String,
            required: true
        },
        subLocation: {
            type: String
        },
        locationIdentifiers: {
            type: [String]
        }
    },

    details: {
        bedrooms: {
            type: Number,
            required: true,
        },
        buildingType: {
            type: String,
            enum:['Apartment', 'Bungalow', 'Massionette', 'Villa', 'Plots'],
            required: true
        },
        masterEnsuite: {
            type: Boolean,
            enum: [true, false]
        },
        bathrooms: {
            type: Number
        }
    },
    onMarket: {
        type: Boolean,
        enum: [true, false],
        default: true,
        required: true
    },
    
    rentPrice: {
        type: Number,
        required: true
    },
    images:[{
        contentType: String,
        imgurl: String
    }],
    tags: {
        type: [String]
    }

})

module.exports = mongoose.model('Listing',ListingSchema)