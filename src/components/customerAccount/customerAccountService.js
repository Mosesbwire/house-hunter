const customerAccountDAL = require("./customerAccountDAL")
const CustomerAccountError = require("./customerAccountError")

async function createCustomerAccount(accountData) {
    try {
        const customerAccount = await customerAccountDAL.createCustomerAccount(accountData)
        return customerAccount
    } catch (error) {
        throw new CustomerAccountError('Failed to creat customer account')
    }
}

async function getCusomerAccounts() {
    try {
        const accounts = await customerAccountDAL.getAllCustomerAccount()
        return accounts
    } catch (error) {
        throw new CustomerAccountError('Failed to retrieve accounts')
    }
}

async function getCustomerAccountById(accountId){
    try {
        const account = await customerAccountDAL(accountId)
        return account
    } catch(error) {
        throw new CustomerAccountError('Failed to fetch account')
    }
}

async function updateCustomerAccount(accountId, accountData) {
    try{
        const account = await customerAccountDAL.updateCustomerAccount(accountId, accountData)
        return account
    } catch(error) {
        throw new CustomerAccountError('Failed to update account')
    }
}

async function deleteCustomerAccount(accountId) {
    try {
        const account = await customerAccountDAL.deleteCustomerAccount(accountId)
        return account
    } catch (error) {
        throw new CustomerAccountError('Failed to delete account')
    }
}

module.exports = {
    createCustomerAccount,
    getCusomerAccounts,
    getCustomerAccountById,
    updateCustomerAccount,
    deleteCustomerAccount
}