const express = require("express")
const {
    createListing,
    getAllListings,
    getListingById,
    updateListing,
    deleteListing,
} = require('./listingController')

const { upload } = require("../../middleware")

const router = express.Router()

// POST /api/v1/listings

router.post('/', upload.array("file") ,createListing)

// GET /api/v1/listings

router.get('/', getAllListings)

// GET /api/v1/listings/:id

router.get('/:id', getListingById)

// PUT /api/v1/listings/:id

router.put('/:id', updateListing)

// DELETE /api/v1/listings/:id

router.delete('/:id', deleteListing)

module.exports = router