const passport = require("passport")
const { body, validationResult } = require("express-validator")
const ValidationError = require('../utils/error/validationError')
function loginCredentialsValidations(req, res, next) {
    const validations = [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email cannot be empty")
            .isEmail()
            .withMessage("Invalid email address"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password cannot be empty")
            .isLength({min: 6})
            .withMessage("Password is too short. Must be atleast 6 characters")
            .isAlphanumeric()
            .withMessage("Password must contain letters and numbers")
        ]
    Promise.all(validations.map((validation)=> validation.run(req)))
        .then(()=> {
            const errors = validationResult(req)
            if (!errors.isEmpty()){
                throw new ValidationError('Login Failed', 400, errors.array())
            }
            next();
        })
        .catch((error) =>{
           next(error)
        })
}
function loginCustomer(req, res, next) {
    
    passport.authenticate('local', async function(err, customer, info){
    
        if (err) {
            return res.status(500).json({message: 'Internal server error', error: err.message})
        }

        if (!customer) {
            return res.status(401).json({error: info.message})
        }
        try {
            await req.login(customer,()=>{
                return next()
            })
        }catch (error){
            
            return res.status(500).json({error: 'Internal server error'})
        }
    })(req, res, next)
}

function authenticateUser(req, res, next) {
    if (req.isAuthenticated()){
        next()
    } else {
        res.status(401).json({message: "You are not logged in. Kindly log in to access this resource."})
    }
}

module.exports = {
    loginCustomer,
    authenticateUser,
    loginCredentialsValidations
}