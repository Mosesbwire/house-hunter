const PaymentService = require("./paymentService")
const PaymentError = require("./paymentError")

async function createPayment(req, res, next) {
    try {
        const payment = await PaymentService.createPayment(req.body)
        res.status(201).json(payment)
    } catch (err) {
        if (err instanceof PaymentError){
            res.status(400).json({error: err.message})
        } else {
            next(err)
        }
    }
}

async function getAllPaymentTransactions(req, res, next) {
    try {
        const payments = await PaymentService.getPaymentTransactions()
        res.status(200).json({payment_records: payments})
    } catch (err) {
        if (err instanceof PaymentError) {
            res.status(400).json({error: err.message})
        } else {
            next(err)
        }
    }
}

async function getPaymentTransactionById(req, res, next) {
    try {
        const payment = await PaymentService.getPaymentTransactionById(req.params.id)
        res.status(200).json(payment)
    } catch (err) {
        if (err instanceof PaymentError) {
            res.status(400).json({error: err.message})
        } else {
            next(err)
        }
    }
}

async function updatePaymentTransaction(req, res, next) {
    try {
        const payment = await PaymentService.updatePayment(req.params.id, req.body)
        res.status(200).json(payment)
    } catch (err) {
        if (err instanceof PaymentError) {
            res.status(400).json({error: err.message})
        } else {
            next(err)
        }
    }
}

module.exports = {
    createPayment,
    getAllPaymentTransactions,
    getPaymentTransactionById,
    updatePaymentTransaction
}