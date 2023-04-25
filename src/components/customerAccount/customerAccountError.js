
class CustomerAccountError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
        this.name = 'CustomerAccountError'
    }
}

module.exports = CustomerAccountError