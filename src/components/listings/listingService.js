const listingDAL = require('./listingDAL')
const ListingError = require('./listingError')
const { upload_cloud_storage, getReadImageUrl } = require("../../libraries")

async function createListing(listingData, images) {
    const image_names = images.map(img => {
        return img.originalname
    })
    try {
        listingData.imageNames = image_names
        const listing = await listingDAL.createListing(listingData)
        if (listing){
            upload_cloud_storage(listing._id, images)
        }
        return listing
    } catch (error) {
        throw new ListingError("Failed to create listing", error) 
    }
}

async function getListings() {
    
    try {
            const listings = await listingDAL.getAllListings()   
            let newListings = []
            let newListing = {}

            for await (const listing of listings){
                const signedUrls = await getReadImageUrl(listing.imageNames, listing.id)
                const {
                    id, name, geoLocation, location, details, onMarket, rentPrice, tags
                } = listing

                newListing = {...{id, name, geoLocation, location, details, onMarket, rentPrice, tags},
                    imageUrls: signedUrls
                }
                newListings.push(newListing)
            }
            return newListings
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
        getReadImageUrl([listing.id])
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