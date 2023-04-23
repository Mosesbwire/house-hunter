
class ListingError extends Error {
    constructor (message, statusCode) {
        super(message)
        this.statusCode = statusCode
        this.name = 'ListingError'
    }
}

module.exports = ListingError