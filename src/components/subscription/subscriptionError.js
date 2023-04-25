
class SubscriptionError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
        this.name = "SubscriptionError"
    }
}

module.exports = SubscriptionError