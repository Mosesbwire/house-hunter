// customerDAL.js

const Customer = require('./customer');
const CustomerError = require('./customerError');

  async function createCustomer(customerData) {
  
    try {
      const customer = new Customer(customerData);
      const savedCustomer = await customer.save();
      return savedCustomer;
    } catch (error) {
      
      throw new CustomerError(error.message, 400);
    }
  }

  async function getAllCustomers() {
    try {
      const customers = await Customer.find({});
  
      return customers;
    } catch (error) {
      throw new CustomerError(error.message, 500);
    }
  }

  async function getCustomerById(customerId) {
    try {
      const customer = await Customer.findById(customerId);
      return customer;
    } catch (error) {
      throw new CustomerError(error.message, 500);
    }
  }

  async function getCustomerByEmail(email) {
    try {
      const customer = await Customer.findOne({email: email})
      return customer
    } catch (error) {
      throw new CustomerError(error.message, 500)
    }
  }

  async function updateCustomer(customerId, updateData) {
    try {
      const updatedCustomer = await Customer.findByIdAndUpdate(customerId, updateData, { new: true });
      return updatedCustomer;
    } catch (error) {
      throw new CustomerError(error.message, 500);
    }
  }

  async function deleteCustomer(customerId) {
    try {
      const deletedCustomer = await Customer.findByIdAndDelete(customerId);
      return deletedCustomer;
    } catch (error) {
      throw new CustomerError(error.message, 500);
    }
  }


module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  getCustomerByEmail,
  updateCustomer,
  deleteCustomer
}
