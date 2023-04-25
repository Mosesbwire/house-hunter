const CustomerAccount = require("./customerAccount")
const CustomerAccountError = require("./customerAccountError")

async function createCustomerAccount(accountData) {
    try {
        const customerAccount = new CustomerAccount(accountData)
        return await customerAccount.save()
    } catch (error) {
        throw new CustomerAccountError(error.message, 400)
    }
}

async function getAllCustomerAccount() {
    try {
        const accounts = await CustomerAccount.find({})
        return accounts
    } catch (error) {
        throw new CustomerAccountError(error.message, 500)
    }
}

async function getCustomerAccountById(accountId) {
    try {
        const customerAccount = await CustomerAccount.findById(accountId)
        return customerAccount
    } catch (error) {
        throw new CustomerAccountError(error.message, 500)
    }
}

async function updateCustomerAccount(accountId, accountData) {
    try {
        const account = await CustomerAccount.findByIdAndUpdate(accountId, accountData, {new: true})
        return account
    } catch (error) {
        throw new CustomerAccountError(error.message, 500)
    }
}

async function deleteCustomerAccount(accountId) {
    try {
        const account = await CustomerAccount.findByIdAndDelete(accountId)
        return account
    } catch(error) {
        throw new CustomerAccountError(error.message, 500)
    }
}

module.exports = {
    createCustomerAccount,
    getAllCustomerAccount,
    getCustomerAccountById,
    updateCustomerAccount,
    deleteCustomerAccount
}