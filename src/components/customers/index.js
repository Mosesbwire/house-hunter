// Import all necessary modules and files
const customerApi = require('./customerApi');
const { getCustomerByEmail } = require('./customerDAL')



// Export all modules and files
module.exports = {
  customerApi,
  getCustomerByEmail,

};
