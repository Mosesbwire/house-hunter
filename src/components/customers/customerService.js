const customerDAL = require('./customerDAL');
const CustomerError = require('./customerError');
const { createCustomerAccount } = require("../customerAccount")
const { hashPassword } = require("../../libraries/bycrpt")



  async function getCustomers() {
    try {
      return await customerDAL.getAllCustomers();
    
    } catch (error) {
      throw new CustomerError('Failed to get customers', error);
    }
  }

  async function getCustomerById(customerId) {
    try {
      const customer = await customerDAL.getCustomerById(customerId);

      if (!customer) {
        throw new CustomerError(`Customer with id ${customerId} not found`);
      }

      return customer;
    } catch (error) {
      throw new CustomerError(`Failed to get customer with id ${customerId}`, error);
    }
  }

  async function createCustomer(customerData) {
    
    try {
      customerData.password = await hashPassword(customerData.password)
      const customer = await customerDAL.createCustomer(customerData);
      const account = await createCustomerAccount(customer.id)
      
      const customerWithAccount = {
        customer: customer,
        account: account
      }
      return customerWithAccount;
    } catch (error) {
      throw new CustomerError('Failed to create customer', error);
    }
  }

  async function updateCustomer(customerId, customerData) {
    try {
      const customer = await customerDAL.updateCustomer(customerId, customerData);

      if (!customer) {
        throw new CustomerError(`Customer with id ${customerId} not found`);
      }

      return customer;
    } catch (error) {
      throw new CustomerError(`Failed to update customer with id ${customerId}`, error);
    }
  }

  async function deleteCustomer(customerId) {
    try {
      const customer = await customerDAL.deleteCustomer(customerId);

      if (!customer) {
        throw new CustomerError(`Customer with id ${customerId} not found`);
      }

      return customer;
    } catch (error) {
      throw new CustomerError(`Failed to delete customer with id ${customerId}`, error);
    }
  }


module.exports = {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
}
