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
      const customer = await Customer.findOne({email: email}).populate('account')
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

  async function addLikedListing(customerId,listingId) {
    try {
      const customer = await getCustomerById(customerId)
      if (!customer) {
        return null
      }
      let index;
      let found = false
      customer.savedListings.forEach((listing, idx) => {
        
        if (listing.toString() === listingId) {
    
          index = idx;
          found = true;
          return;
        }
      })
      if (found) {
        customer.savedListings.splice(index, 1);
      } else {
        customer.savedListings.push(listingId)
      }
      customer.save()
      return customer.savedListings

    } catch (error) {
      throw new CustomerError(error.message, 500)
    }
  }

  async function viewLikedListings(customerId) {
    try {
      const customer = await getCustomerById(customerId)
      if (!customer) {
        return null
      }
      return customer.savedListings
    } catch (error) {
      throw new CustomerError(error.message, 500)
    }
  }


module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  getCustomerByEmail,
  updateCustomer,
  deleteCustomer,
  addLikedListing,
  viewLikedListings
}
