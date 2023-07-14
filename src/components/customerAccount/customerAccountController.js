const CustomerAccountService = require("./customerAccountService")
const CustomerAccountError = require("./customerAccountError")
const asyncWrapper = require('../../utils/asyncWrapper')

async function createCustomerAccount(req, res, next) {
    try {
        const account = await CustomerAccountService.createCustomerAccount(req.body)
        res.status(201).json(account)
    } catch (err) {
        if (err instanceof CustomerAccountError){
            res.status(400).json({error: err.message})
        } else {
            next(err)
        }
    }
}

async function getCusomerAccounts(req, res, next) {
    try {
        const accounts = await CustomerAccountService.getCusomerAccounts()
        res.status(200).json({customerAccounts: accounts})
    } catch(err) {
        if (err instanceof CustomerAccountError) {
            res.status(400).json({error: err.message})
        } else {
            next(err)
        }
    }
}

async function getCustomerAccountById(req, res, next) {
    try {
        const account = await CustomerAccountService.getCustomerAccountById(req.params.id)
        if (!account){
            throw new CustomerAccountError('Account does not exist')
        }
        res.status(200).json(account)
    } catch (err) {
        if (err instanceof CustomerAccountError) {
            res.status(400).json({error: err.message})
        } else {
            next(err)
        }

    }
}

async function updateCustomerAccount(req, res, next) {
    try {
        const account = await CustomerAccountService.updateCustomerAccount(req.params.id, req.body)
        if (!account) {
            throw new CustomerAccountError('Account does not exist')
        }
        res.status(200).json(account)
    } catch (err) {
        if (err instanceof CustomerAccountError) {
            res.status(400).json({error: err.message})
        } else {
            next(err)
        }
    }
}   

async function deleteCustomerAccount(req, res, next) {
    try {
        await CustomerAccountService.deleteCustomerAccount(req.params.id)
        res.sendStatus(204)
    }catch (err) {
        if (err instanceof CustomerAccountError) {
            res.status(400).json({error: err.message})
        } else {
            next(err)
        }
    }
}

module.exports = {
    createCustomerAccount,
    getCusomerAccounts,
    getCustomerAccountById,
    updateCustomerAccount,
    deleteCustomerAccount
}