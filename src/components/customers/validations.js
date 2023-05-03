const {body, validationResult} = require("express-validator")
const validator = require("validator")

async function validateCustomerData(req) {
    const validations = [
        body("firstName")
          .trim()
          .notEmpty()
          .withMessage("First name can not be empty")
          .isLength({min: 1})
          .withMessage("First name can not be less than 1 character")
          .isAlpha()
          .withMessage("First name can not contain numbers or symbols"),
        body("lastName")
          .trim()
          .notEmpty()
          .withMessage("Last name can not be empty")
          .isLength({min: 1})
          .withMessage("Last name can not be less than 1 character")
          .isAlpha()
          .withMessage("Last name can not contain numbers or symbols"),
        body("email")
          .trim()
          .notEmpty()
          .withMessage("Email is required")
          .isEmail()
          .withMessage("Invalid email format"),
        body("password")
          .trim()
          .notEmpty()
          .withMessage("Password is required")
          .custom((value) =>{
            const options = {
              minLength: 6,
              minNumbers: 1,
              minLowercase: 0,
              minUppercase: 0,
              minSymbols: 0
            }
            if (!validator.isStrongPassword(value,options)){
              throw new Error("Password must contain letters and numbers")
            }
            return true
          }),
        body("confirmPassword")
          .trim()
          .notEmpty()
          .withMessage("Confirm password is required")
          .custom((value, {req}) => {
            if (value !== req.body.password) {
              throw new Error('Passwords do not match')
            }
            return true
          })
        
      ]
      await Promise.all(validations.map((validation)=> validation.run(req)))
      const errors = validationResult(req)
      return errors
}   

module.exports = {
    validateCustomerData
}