const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ListingSchema = new Schema({
    
    name: {
        type: String,
    },
    geoLocation: {
        type: {
            latitude: String,
            longitude: String
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
            enum:['Apartment', 'Bungalow', 'Massionette', 'Villa'],
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
    
    rent_price: {
        type: Number,
        required: true
    },
    image_names: {
        type: [String]
    },
    tags: {
        type: [String]
    }

})

module.exports = mongoose.model('Listing',ListingSchema)