const returnError = require('../utils/error/returnError')
function errorHandler(error, req, res, next){
    returnError(error, req, res)
}

module.exports = errorHandler