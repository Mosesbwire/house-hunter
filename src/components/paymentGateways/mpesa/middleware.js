require('dotenv').config()
const axios = require('axios')

async function getAuthToken(req, res, next){
    const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
    const auth = new Buffer.from(`${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`).toString("base64");

    try {
        const res = await axios.get(url, {
            headers: {
                "Authorization": "Basic " + auth
            }
        })
        req.access_token = res.data.access_token
        next()
    } catch (err) {
        console.error(err)
        res.status(err.statusCode).json(err.statusMessage)
    }
}

module.exports = {
    getAuthToken
}