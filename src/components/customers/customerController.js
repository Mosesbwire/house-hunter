const {body, validationResult} = require("express-validator")
const validator = require("validator")
const customerService = require('./customerService');
const CustomerError = require('./customerError');
  
  async function createCustomer(req, res, next) {
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

    try {
      await Promise.all(validations.map((validation)=> validation.run(req)))
      const errors = validationResult(req)
      if (!errors.isEmpty()){
        return res.status(422).json({error: errors.array()})

      }
      const customer = await customerService.createCustomer(req.body);
      res.status(201).json(customer);
    } catch (err) {
      if (err instanceof CustomerError) {
        res.status(400).json({ error: err.message });
      } else {
        next(err);
      }
    }
  }

  async function getAllCustomers(req, res, next) {
    try {
      const allCustomers = await customerService.getCustomers();
      res.status(200).json({ customers: allCustomers });
    } catch (err) {
     
      if (err instanceof CustomerError) {
        res.status(err.statusCode).json({ error: err.message });
      } else {
       
        next(err);
      }
    }
  }

  async function getCustomerById(req, res, next) {
    try {
      const customer = await customerService.getCustomerById(req.params.id);
      res.json(customer);
    } catch (err) {
      if (err instanceof CustomerError) {
        res.status(404).json({ error: err.message });
      } else {
        next(err);
      }
    }
  }

  async function updateCustomer(req, res, next) {
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
        .withMessage("Invalid email format")
    ]
    try {

      await Promise.all(validations.map((validation) => validation.run(req)))
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(422).json({error: errors.array()})
      }
      const customer = await customerService.updateCustomer(req.params.id, req.body);
      res.json(customer);
    } catch (err) {
      if (err instanceof CustomerError) {
        res.status(400).json({ error: err.message });
      } else {
        next(err);
      }
    }
  }

  async function deleteCustomer(req, res, next) {
    try {
      await customerService.deleteCustomer(req.params.id);
      res.sendStatus(204);
    } catch (err) {
      if (err instanceof CustomerError) {
        res.status(404).json({ error: err.message });
      } else {
        next(err);
      }
    }
  }

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer
};
