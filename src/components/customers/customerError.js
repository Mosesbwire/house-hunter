// customerError.js

class CustomerError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      this.name = 'CustomerError';
    }
  }
  
  module.exports = CustomerError;
  