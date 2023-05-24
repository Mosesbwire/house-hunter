const MpesaService = require('./mpesaService')
const axios = require('axios')


async function confirmMpesaPayment(req, res, next){
    try {
        
        const record = await MpesaService.createTransactionRecord(req.body)
        if (!record){
            return res.status(404).json({msg: 'Customer Account Does not exist'})
        }
        res.status(200).json({"ResultCode": "0", "ResultDesc": "Accepted", record})
    } catch (err) {
        console.error(err)
        next(err)
    }
}

async function registerUrl(req, res, next){
    const url = "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl"
    const auth = "Bearer " + req.access_token

    const data = {
        ShortCode: "174379",
        ResponseType: "Completed",
        ConfirmationURL: "https://af6a-41-80-115-62.ngrok-free.app/api/v1/payments/confirm_payment",
        ValidationURL: "http://mosesbwire.com/validate_customer_account"
    }

    try {
        const resp = await axios.post(url,data, {
            headers: {
                Authorization: auth
            }
        })
        return res.status(200).json(resp.data)
    } catch (err){
        console.error(err)
        next(err)
    }
}

async function makePayment(req, res, next){
    
}
module.exports = {
    registerUrl,
    confirmMpesaPayment
}
