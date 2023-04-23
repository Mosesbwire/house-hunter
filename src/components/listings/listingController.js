const ListingService = require('./listingService')
const ListingError = require('./listingError')

async function createListing(req, res, next) {
    try {
        const listing = await ListingService.createListing(req.body)
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
        res.status(200).json({listings: listings})
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