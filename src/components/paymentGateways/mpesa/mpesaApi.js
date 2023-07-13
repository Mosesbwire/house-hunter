const express = require('express')
const router = express.Router()

const {registerUrl, confirmMpesaPayment, makePayment} = require('./mpesaController')
const {getAuthToken} = require('./middleware')

// GET /api/v1/payments/register_url
router.get('/register_url', getAuthToken, registerUrl)

//POST /api/v1/payments/confirm_payment
// add getAuthToken when movin to prod
router.post('/confirm_payment', confirmMpesaPayment)

//POST /api/v1/payments/make_payment/:id
// route initiates STK/NI push to clients phone
//add getAuthToken when ovin to prod
router.post('/make_payment/:id',makePayment)

module.exports = router

