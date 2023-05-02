const Listing = require('./listing')
const ListingError = require('./listingError')

async function createListing(listingData){

    try {
        const listing = new Listing(listingData)
        const savedListing = await listing.save()
        return savedListing
    }catch(error) {
        console.error(error)
        throw new ListingError(error.message, 400)
    }
}

async function getAllListings() {
    try {
        const listings = await Listing.find({})
        return listings
    }catch (error) {
        throw new ListingError(error.message, 500)
    }
}

async function getListingById(listingId) {

    try {
        const listing = await Listing.findById(listingId)
        return listing
    }catch (error) {
        throw new ListingError(error.message, 500)
    }
}

async function updateListing(listingId, updateData) {
    try {
        const updatedListing = await Listing.findByIdAndUpdate(listingId, updateData, {new: true})
        return updatedListing
    } catch (error) {
        throw new ListingError(error.message, 500)
    }

}


async function deleteListing(listingId) {
    try {
        const deletedListing = await Listing.findByIdAndDelete(listingId)
        return deletedListing

    } catch (error) {
        throw new ListingError(error.message, 500)
    }
}

module.exports = {
    createListing,
    getAllListings,
    getListingById,
    updateListing,
    deleteListing
}