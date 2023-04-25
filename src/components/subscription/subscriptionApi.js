const express = require("express")
const {
    createSubscription,
    getAllSubscriptions,
    getSubscriptionById,
    updateSubscription,
    deleteSubscription
} = require("./subscriptionController")

const router = express.Router()

// POST /api/v1/subscriptions
router.post('/', createSubscription)

// GET /api/v1/suscriptions
router.get('/', getAllSubscriptions)

// GET /api/v1/subscriptions/:id

router.get('/:id', getSubscriptionById)

// PUT /api/v1/subscriptions/:id

router.put('/:id', updateSubscription)

// DELETE /api/v1/subscriptions/:id

router.delete('/:id', deleteSubscription)