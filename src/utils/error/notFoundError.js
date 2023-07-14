const ApplicationError = require('./applicationError')

class NotFoundError extends ApplicationError{
    constructor(message, statusCode){
        super(message, statusCode)
    }
}

module.exports = NotFoundError
