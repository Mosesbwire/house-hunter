const ApplicationError = require('./applicationError')
class ValidationError extends ApplicationError {
    constructor(message, statusCode, cause){
        super(message, statusCode);
        this.cause = cause;
    }
}

module.exports = ValidationError