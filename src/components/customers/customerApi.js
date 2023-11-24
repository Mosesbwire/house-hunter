const express = require('express');
const {getAllCustomers, getCustomerById, updateCustomer, deleteCustomer, addLikedListing, viewLikedListings } = require('./customerController');
const { authenticateUser } = require("../../middleware")
const router = express.Router();



// GET /api/customers
router.get('/', getAllCustomers);

// GET /api/customers/:id

router.get('/:id', getCustomerById);

// PUT /api/customers/:id

router.put('/:id', updateCustomer);

// DELETE /api/customers/:id

router.delete('/:id', deleteCustomer);

// POST /api/customers/:id/:listingId

router.post('/:id/:listingId', addLikedListing)

// GET /api/customers/:id/likes

router.get('/:id/likes', viewLikedListings)

module.exports = router;
