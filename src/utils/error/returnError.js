function returnError(err, res){
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        statusCode,
        message: err.message,
        error: err.cause || []
    })
}

module.exports = returnError