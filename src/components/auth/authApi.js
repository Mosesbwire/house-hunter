const express = require("express")
const router = express.Router()

const { loginCustomer } = require("../../middleware")

// POST /api/v1/auth/login/local/customer

router.post('/login/local/customer', loginCustomer, (req,res,next) =>{
    
    res.status(200).json(req.user)
})


module.exports = router