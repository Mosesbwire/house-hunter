const customerService = require('./customerService');
const CustomerError = require('./customerError');
const { validateCustomerData} = require("./validations")
const ValidationError = require('../../utils/error/validationError')
const asyncWrapper = require('../../utils/asyncWrapper')
  
  async function createCustomer(req, res, next) {
    try {

      const errors = await validateCustomerData(req)
      if (!errors.isEmpty()){
        throw new ValidationError('Failed to create customer account', 422, errors.array())
      }
      const customer = await customerService.createCustomer(req.body);
      req.login(customer, (err)=>{
        if(err) {
          return next(err)
        }
        req.user.password = null
        return res.status(201).json(req.user);
      }) 
    } catch (err) {
      next(err)
    }
  }

  async function getAllCustomers(req, res, next) {
      const results = await asyncWrapper(customerService.getCustomers());
      if (results.error){
        return next(results.error)
      }
      res.status(200).json({ customers: results.data });
  }

  async function getCustomerById(req, res, next) {
      const results = await asyncWrapper(customerService.getCustomerById(req.params.id));
      if (results.error){
        return next(results.error)
      }
      res.json(results.data);
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

  async function addLikedListing(req, res, next) {
  
    try {
      const results = await asyncWrapper(customerService.addLikedListing(req.params.id, req.params.listingId))
      if (results.error){
        return next(results.error)
      }
      res.status(200).json('OK')
    } catch (err) {
      next(err)
    }
  }

  async function viewLikedListings(req, res, next) {
    try {
      const results = await asyncWrapper(customerService.viewLikedListings(req.params.id))
      if (results.error) {
        return next(results.error)
      }
      
      res.status(200).json(results.data)
    } catch (err) {
      next(err)
    }
  }
module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
  addLikedListing,
  viewLikedListings
};
