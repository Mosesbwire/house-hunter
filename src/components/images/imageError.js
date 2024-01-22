
class ImageError extends Error {
    constructor (message, statusCode) {
        super(message)
        this.statusCode = statusCode
        this.name = 'ImageError'
    }
}

module.exports = ImageError