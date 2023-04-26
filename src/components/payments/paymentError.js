
class PaymentError extends Error {
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
        this.name = "PaymentError"
    }
}

module.exports = PaymentError