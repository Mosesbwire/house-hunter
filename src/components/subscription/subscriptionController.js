const SubscriptionService = require("./subscriptionService")
const SubscriptionError = require("./subscriptionError")

async function createSubscription(req, res, next) {
    try {
        const subscription = await SubscriptionService.createSubscription(req.body)
        res.status(201).json(subscription)
    } catch (err) {
        if (err instanceof SubscriptionError) {
            res.status(400).json({error: err.message})
        } else {
            next(err)
        }
    }
}

async function getAllSubscriptions(req, res, next) {
    try {
        const subscriptions = await SubscriptionService.getAllSubscriptions()
        res.status(200).json({subscriptions: subscriptions})
    } catch(error) {
        if (err instanceof SubscriptionError) {
            res.status(400).json({error: err.message})
        } else {
            next(err)
        }
    }
}

async function getSubscriptionById(req, res, next) {
    try {
        const subscription = await SubscriptionService(req.params.id)
        res.status(200).json(subscription)
    } catch (err) {
        if (err instanceof SubscriptionError) {
            res.status(400).json({error: err.message})
        } else {
            next(err)
        }
    }
}

async function updateSubscription(req, res, next) {
    try {
        const subscription = await SubscriptionService.updateSubscription(req.params.id, req.body)
        res.status(200).json(subscription)
    } catch (err) {
        if (err instanceof SubscriptionError) {
            res.status(400).json({error: err.message})
        } else {
            next(err)
        }
    }
}

async function deleteSubscription(req, res, next) {
    try {
        await SubscriptionService.deleteSubscription(req.params.id)
        res.sendStatus(204)
    } catch (err) {
        if (err instanceof SubscriptionError){
            res.status(400).json({error: err.message})
        } else {
            next(err)
        }
    }
} 

module.exports = {
    createSubscription,
    getAllSubscriptions,
    getSubscriptionById,
    updateSubscription,
    deleteSubscription
}