const subscriptionDAL = require("./subscriptionDAL")
const SubscriptionError = require("./subscriptionError")

async function createSubscription(subscriptionData) {
    try {
        //listen for account updated event
        // use accountId to create sub for correct user
        const subscription = await subscriptionDAL.createSubscription(subscriptionData)
        // emit subscription created event
        return subscription
    } catch (error) {
        // emit subscription failed event.
        // keep track of retries before sending this back to user 
        throw new SubscriptionError('Failed to create subscription', error)
    }
}

async function getAllSubscriptions(){
    try {
        return await subscriptionDAL.getAllSubscriptions()
    } catch (error) {
        throw new SubscriptionError('Failed to get subscriptions', error)
    }
}

async function getSubscriptionById(subscriptionId) {
    try {
        const subscription = await subscriptionDAL.getSubscriptionById(subscriptionId)

        if (!subscription) {
            throw new SubscriptionError('Subscription does not exist')
        }
        return  subscription
    } catch (error) {
        throw new SubscriptionError('Failed to get subscription', error)
    }
}

async function updateSubscription(subscriptionId, subscriptionData) {
    try {
        const subscription = await subscriptionDAL.updateSubscription(subscriptionId, subscriptionData)

        if (!subscription) {
            throw new SubscriptionError('Subscription does not exist')
        }
        return subscription
    } catch (error) {
        throw new SubscriptionError('Failed to update subscription', error)
    }
}

async function deleteSubscription(subscriptionId) {
    try {
        const subscription = await subscriptionDAL.deleteSubscription(suscriptionId)
        if (!subscription) {
            throw new SubscriptionError('Subscription does not exist')
        }
        return subscription
    } catch (error) {
        throw new SubscriptionError('Failed to delete subscription', error)
    }
}

module.exports = {
    createSubscription,
    getAllSubscriptions,
    getSubscriptionById,
    updateSubscription,
    deleteSubscription
}