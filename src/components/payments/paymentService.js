const paymentDAL = require("./paymentDAL")
const PaymentError = require("./paymentError")

async function createPayment(paymentData) {
    try {
        const payment = await paymentDAL.createPayment(paymentData)
        return payment
    } catch (error) {
        throw new PaymentError('Failed to create transaction record', error)
    }
}

async function getPaymentTransactions() {
    try {
        return await paymentDAL.getPaymentTransactions()
    } catch (error) {
        throw new PaymentError('Failed to retrieve transaction records', error)
    }
}

async function getPaymentTransactionById(paymentId) {
    try {
        const payment = await paymentDAL.getPaymentTransactionById(paymentId)
        if (!payment) {
            throw new PaymentError('Transaction does not exist')
        }
        return payment
    } catch (error) {
        throw new PaymentError('Failed to retrieve transaction record', error)
    }
}

async function updatePayment(paymentId, paymentData) {
    // can only update payment amount after reversal
    // update reason
    try {
        const payment = await paymentDAL.updatePayment(paymentId, paymentData)
        if (!payment) {
            throw new PaymentError('Transaction Does not exist')
        }
        return payment
    } catch (error) {
        throw new PaymentError('Failed to update transaction record', error)
    }
}

module.exports = {
    createPayment,
    getPaymentTransactionById,
    getPaymentTransactions,
    updatePayment
}