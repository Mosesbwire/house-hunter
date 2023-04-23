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
    onMarket: {
        enum: [true, false],
        default: true,
        required: true
    },
    
    rent_price: {
        type: Number,
        required: true
    },

    images: {
        mainImage: {
            type: String
        },
        livingRoom: {
            type: [String]
        },
        bedroom: {
            masterBedroom: {
                type: [String]
            },
            otherBedrooms: {
                type: [String]
            }
        },
        kitchen: {
            type: [String]
        },
        bathroom: {
            type: [String]
        },
        otherRooms: {
            type: [String]
        }
    }

})

module.exports = mongoose.model('Listing',ListingSchema)