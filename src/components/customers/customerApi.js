const express = require('express');
const {createCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer } = require('./customerController');
const { authenticateUser } = require("../../middleware")
const router = express.Router();

// GET /api/customers
router.get('/', authenticateUser, getAllCustomers);

// GET /api/customers/:id

router.get('/:id', getCustomerById);

// POST /api/customers

router.post('/', createCustomer);

// PUT /api/customers/:id

router.put('/:id', updateCustomer);

// DELETE /api/customers/:id

router.delete('/:id', deleteCustomer);

module.exports = router;
