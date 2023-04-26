const express = require("express")
const {
    createPayment,
    getAllPaymentTransactions,
    getPaymentTransactionById,
    updatePaymentTransaction
} = require("./paymentController")

const router = express.Router()

// POST /api/v1/payments

router.post('/', createPayment)

// GET /api/v1/payments

router.get('/', getAllPaymentTransactions)

// GET /api/v1/payments/:id

router.get('/:id', getPaymentTransactionById)

// put /api/v1/payments/:id

router.put('/:id', updatePaymentTransaction)

module.exports = router