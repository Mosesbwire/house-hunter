const customerAccountDAL = require("./customerAccountDAL")
const CustomerAccountError = require("./customerAccountError")
const crypto = require("crypto")

async function checkAccountExists(accountNumber) {
    const account = await customerAccountDAL.getAccountByAccountNumber(accountNumber)

    if (account){
        return true
    } 
    return false
}



function generateAccountNumber(id) {

        const hash = crypto.createHash('sha256').update(id.toString()).digest('hex');
        const num = parseInt(hash.substring(0, 8), 16);
        const accountNumber = (num % 9000) + 1000;
        return accountNumber;
}


async function createCustomerAccount(customerId) {
    try {
        const accountNumber = generateAccountNumber(customerId)
        let accountData = {
            customer: customerId,
            accountNumber: accountNumber
        }
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