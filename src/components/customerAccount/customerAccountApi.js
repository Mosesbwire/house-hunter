const express = require("express")
const {
    createCustomerAccount,
    getCusomerAccounts,
    getCustomerAccountById,
    updateCustomerAccount,
    deleteCustomerAccount
} = require("./customerAccountController")

const router = express.Router()

// POST /api/v1/customers/customer-accounts

router.post('/', createCustomerAccount)

// GET /api/v1/customers/customer-accounts

router.get('/', getCusomerAccounts)

// GET /api/v1/customers/customer-accounts/:id

router.get('/:id', getCustomerAccountById)

// PUT /api/v1/customers/customer-accounts/:id

router.put('/:id', updateCustomerAccount)

// DELETE /api/v1/customers/customer-account/:id

router.delete('/:id', deleteCustomerAccount)

module.exports = router