const listingDAL = require('./listingDAL')
const ListingError = require('./listingError')

async function createListing(listingData) {
    try {
        const listing = await listingDAL.createListing(listingData)
        return listing
    } catch (error) {
        throw new ListingError("Failed to create listing", error) 
    }
}

async function getListings() {
    try {
        return await listingDAL.getAllListings();
    } catch (error) {
        throw new ListingError('Failed to get listings', error)
    }
}

async function getListingById(listingId) {
    // make exteranl call to get places close to the location of listing
    try {
        const listing = await listingDAL.getListingById(listingId)

        if (!listing) {
            throw new ListingError('Listing does not exist')
        }
        return listing
    } catch (error) {
        throw new ListingError(`Failed to get listing with id ${listingId}`, error)
    }
}

async function updateListing(listingId, listingData) {
    try {
        const listing = await listingDAL.updateListing(listingId, listingData)

        if (!listing) {
            throw new ListingError('Listing does not exist')
        }
        return listing
    } catch (error) {
        throw new ListingError(`Failed to update listing with id ${listingId}`, error)
    }
}

async function deleteListing(listingId) {
    try {
        const listing = await listingDAL.deleteListing(listingId)

        if (!listing) {
            throw new ListingError('Listing does not exist')
        }
        return listing
    } catch(error) {
        throw new ListingError('Failed to delete listing', error)
    }
}

module.exports = {
    createListing,
    getListings,
    getListingById,
    updateListing,
    deleteListing
}