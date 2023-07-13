
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
    
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
    const auth = "Bearer " + req.access_token
    
    
    try {

        let price = await MpesaService.planPrice(req.params.price)
        const data = {    
            "BusinessShortCode": "174379",    
            "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3",    
            "Timestamp":"20160216165627",    
            "TransactionType": "CustomerBuyGoodsOnline",    
            "Amount": price,    
            "PartyA": req.body.PhoneNumber,    
            "PartyB":"174379",    
            "PhoneNumber": req.body.PhoneNumber,    
            "CallBackURL": "https://mydomain.com/pat",    
            "AccountReference":"Test",    
            "TransactionDesc":"Test"
         }
        const resp = await axios.post(url, data, {
            headers : {
                Authorization: auth
            }
        })

        if (resp.responseCode !== 0){
            return res.json({msg: "Transaction aborted. Transaction cancelled by user"})
        }

        let transactionData = {
            "userId": req.params.id,
            "phoneNumber": req.body.phoneNumber, 
            "Account_num": req.params.acc
        }

        MpesaService.queueTransaction(transactionData)

        res.status(200).json({msg: "Request received. Processing Payment"})

    } catch (err) {
        console.error(err)
        next(err)
    }

}
module.exports = {
    registerUrl,
    confirmMpesaPayment,
    makePayment
}
