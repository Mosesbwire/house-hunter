const customerService = require('./customerService');
const CustomerError = require('./customerError');
  
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
