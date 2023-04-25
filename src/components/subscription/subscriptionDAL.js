const Subscription = require("./subscription")
const SubscriptionError = require("./subscriptionError")

async function createSubscription(subscriptionData) {
    try {
        const subscription = new Subscription.create(subscriptionData)
        const savedSubscription = await subscription.save()
        return savedSubscription
    } catch (error) {
        throw new SubscriptionError(error.message, 500)
    }
}

async function getAllSubscriptions() {
    try {
        const subscriptions = await Subscription.find({})
        return subscriptions
    } catch (error) {
        throw new SubscriptionError(error.message, 500)
    }
}

async function getSubscriptionById(subscriptionId) {
    try {
        const subscription = await Subscription.findById(subscriptionId)
        return subscription
    } catch (error) {
        throw new SubscriptionError(error.message, 500)
    }
}

async function updateSubscription(subscriptionId, subscriptionData) {
    try {
        const subscription = await Subscription.findByIdAndUpdate(subscriptionId, subscriptionData, {new: true})
        return subscription

    } catch (error) {
        throw new SubscriptionError(error.message, 500)
    }
}

async function deleteSubscription(subscriptionId) {
    try {
        const subscription = await Subscription.findByIdAndDelete(subsriptionId)
        return subscription
    } catch (error) {
        throw new SubscriptionError(error.message, 500)
    }
}

module.exports = {
    createSubscription,
    getAllSubscriptions,
    getSubscriptionById,
    updateSubscription,
    deleteSubscription
}