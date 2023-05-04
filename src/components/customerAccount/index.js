const customerAccountApi = require("./customerAccountApi")
const { createCustomerAccount, getCustomerAccountById } = require("./customerAccountService")

module.exports = {
    customerAccountApi,
    createCustomerAccount,
    getCustomerAccountById
}