const customerService = require('./customerService');
const CustomerError = require('./customerError');

// I made the methods in the controller static because the controller is responsible for handling incoming requests and returning responses. It does not have any state of its own and does not need to maintain any instance-specific information.

// By making the methods static, we can call them directly on the class without having to instantiate an object. This makes the code simpler and more concise. Additionally, it makes it easier to test the controller methods because we don't have to worry about setting up and tearing down objects for each test.


  
  async function createCustomer(req, res, next) {
    try {
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
    try {
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
