function returnError(err, req, res){
    const statusCode = err.statusCode || 500;
    if (err.name === 'NotFoundError'){
        err.message = `${err.message} at specified path ${req.path} not found`
    }
    res.status(statusCode).json({
        statusCode,
        message: err.message,
        error: err.cause || []
    })
}

module.exports = returnError