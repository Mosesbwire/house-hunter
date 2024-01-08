const listingDAL = require('./listingDAL')
const ListingError = require('./listingError')

async function createListing(listingData, images) {
    
    const Images = images.map((img) => {
        const baseString = Buffer.from(img.buffer).toString('base64');
        return {contentType: img.mimetype, imgurl: baseString}
    })
    console.log(Images);
    try {
        listingData.images = Images
        const listing = await listingDAL.createListing(listingData)
        return listing
    } catch (error) {
        console.log(error);
        throw new ListingError("Failed to create listing", error) 
    }
}

async function getListings() {
    
    try {   
            
            
            const listings = await listingDAL.getAllListings();
            
            return listings
    } catch (error) {
        throw new ListingError('Failed to get listings', error)
    }
}

async function getListingById(listingId) {
    // make exteranl call to get places close to the location of listing
    let newListing = {}
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