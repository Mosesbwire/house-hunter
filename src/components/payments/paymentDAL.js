const Payment = require("./payment")
const PaymentError = require("./paymentError")

async function createPayment(paymentData) {
    try {
        const payment = new Payment.create(paymentData)

        return await payment.save()
    } catch (error) {
        throw new PaymentError(error.message, 500)
    }
}

async function getPaymentTransactions() {
    try {
         return await Payment.find({}) 
    } catch (error) {
        throw new PaymentError(error.message, 500)
    }
}

async function getPaymentTransactionById(paymentId) {
    try {
        const payment = await Payment.findById(paymentId)
        return payment
    } catch (error) {
        throw new PaymentError(error.message, 500)
    }
}

async function updatePayment(paymentId, paymentData) {
    try {
        const payment = Payment.findByIdAndUpdate(paymentId, paymentData, {new: true})
        return payment
    } catch (error) {
        throw new PaymentError(error.message, 500)
    }
}

module.exports = {
    createPayment,
    getPaymentTransactionById,
    getPaymentTransactions,
    updatePayment
}