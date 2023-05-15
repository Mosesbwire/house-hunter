const ListingService = require('./listingService')
const ListingError = require('./listingError')
const { validateListingData } = require("./validation")


async function createListing(req, res, next) {
    try {
        const data = {
            name: "The Loft",
            location : {
                mainLocation: "Westlands",
                subLocation: "Peponi Rd",
                locationIdentifiers: ["Peponi rd 158"]
            },
            geoLocation: {
                latitude: -1.2927,
                longitude: 36.7965
            },
            details: {
                bedrooms: 1,
                buildingType: "Apartment",
                masterEnsuite: false,
                bathrooms: 1
            },
            onMarket: true,
            rentPrice: 60000,
            tags: ["Serviced Apartment", "Concierge services", "Rooftop Swimming pool", "Gym"]

        }
        // const errors = await validateListingData(req)
        // if (!errors.isEmpty()){
        //     res.status(422).json({error: errors.array()})
        // }
        const listing = await ListingService.createListing(data, req.files)
        req.files = null
        res.status(201).json(listing)
    } catch (err) {
        if (err instanceof ListingError) {
            res.status(400).json({error: err.message})
        } else {
            next(err)
        }
    }
}

async function getAllListings(req, res, next) {
    try {
        const listings = await ListingService.getListings()
        res.status(200).json(listings)
    } catch (err) {
        if (err instanceof ListingError) {
            res.status(err.statusCode).json({error: err.message})
        } else {
            next(err)
        }
    }
}

async function getListingById(req, res, next) {
    try {
        const listing = await ListingService.getListingById(req.params.id)
        res.status(200).json(listing)
    } catch (err) {
        if (err instanceof ListingError) {
            res.status(404).json({error: err.message})
        } else {
            next(err)
        }
    }
}

async function updateListing(req, res, next) {
    try {
        const errors = await validateListingData(req)

        if (!errors.isEmpty()){
            return res.status(422).json({error: errors.array()})
        }
        const listing = await ListingService.updateListing(req.params.id, req.body)
        res.status(200).json(listing)
    } catch (err) {
        if (err instanceof ListingError) {
            res.status(400).json({error: err.message})
        } else {
            next(err)
        }
    }
}

async function deleteListing(req, res, next) {
    try {
        await ListingService.deleteListing(req.params.id)
        res.sendStatus(204)
    } catch (err) {
        if (err instanceof ListingError) {
            res.status(404).json({error: err.message})
        } else {
            next(err)
        }
    }
}

module.exports = {
    createListing,
    getAllListings,
    getListingById,
    updateListing,
    deleteListing
}