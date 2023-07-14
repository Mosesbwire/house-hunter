const customerDAL = require('./customerDAL');
const CustomerError = require('./customerError');
const { createCustomerAccount } = require("../customerAccount")
const { hashPassword } = require("../../libraries/bycrpt")
const ApplicationError = require('../../utils/error/applicationError')
const NotFoundError = require('../../utils/error/notFoundError')
const asyncWrapper = require('../../utils/asyncWrapper')

  async function getCustomers() {
    const results = await asyncWrapper(customerDAL.getAllCustomers())
    if (results.error){
      throw new ApplicationError('Internal Server Error', 500)
    }
    return results.data
  }

  async function getCustomerById(customerId) {
    const results = await asyncWrapper(customerDAL.getCustomerById(customerId))
  
    if (results.error){
      throw new ApplicationError('Internal Server Error', 500)
    }

    if (!results.data){
      throw new NotFoundError('Customer')
    }

    return results.data
  }

  async function addAccountToCustomer(account, customer){
    try {
      customer.account = account
      customer.save()
      return customer

    } catch(error) {
      throw new Error('Failed to add account to customer')
    }
  }

  async function createCustomer(customerData) {
    
    try {
      customerData.password = await hashPassword(customerData.password)
      let customer = await customerDAL.createCustomer(customerData);
      const account = await createCustomerAccount(customer.id);
      customer = await addAccountToCustomer(account, customer)
      customer = await customer.populate('account')
      
      return customer
    } catch (error) {
      console.log(error)
      throw new CustomerError('Failed to create customer', error);
    }
  }

  async function updateCustomer(customerId, customerData) {
    
      const results = await asyncWrapper(customerDAL.updateCustomer(customerId, customerData));
      if (results.error){
        throw new ApplicationError('INTERNAL SERVER ERROR', 500)
      }

      if (!results.data){
        throw new NotFoundError('Customer')
      }
      return results.data
  }

  async function deleteCustomer(customerId) {
      const results = await asyncWrapper(customerDAL.deleteCustomer(customerId));
      if (results.error){
        throw new ApplicationError('INTERNAL SERVER ERROR', 500)
      }

      if (!results.data){
        throw new NotFoundError('Customer')
      }

      return results.data;
  }


module.exports = {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
}
