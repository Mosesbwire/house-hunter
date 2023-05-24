const express = require("express")
const router = express.Router()

const { loginCustomer, loginCredentialsValidations } = require("../../middleware")
const { createCustomer } = require("../customers")

// POST /api/v1/auth/login/local/customer

router.post('/login/local/customer', loginCredentialsValidations,loginCustomer, (req,res) =>{
    
    res.status(200).json(req.user)
})

// POST /api/v1/auth/sign-up/customer

router.post('/sign-up/customer', createCustomer)

// POST /api/v1/auth/logout

router.post('/logout', (req, res) => {
    req.logout
    res.status(200).json({success: true, message: "Logged out successfully"})
})


module.exports = router