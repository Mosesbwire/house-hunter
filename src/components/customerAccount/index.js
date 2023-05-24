const customerAccountApi = require("./customerAccountApi")
const { createCustomerAccount, getCustomerAccountById, getCustomerAccountByAccountNumber } = require("./customerAccountService")

module.exports = {
    customerAccountApi,
    createCustomerAccount,
    getCustomerAccountById,
    getCustomerAccountByAccountNumber
}