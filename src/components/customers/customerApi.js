const express = require('express');
const {getAllCustomers, getCustomerById, updateCustomer, deleteCustomer } = require('./customerController');
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

module.exports = router;
