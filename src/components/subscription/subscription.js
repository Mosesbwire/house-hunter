const mongoose = require("mongoose")

const Schema = mongoose.Schema

const SubscriptionSchema = new Schema({
    custoomer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan',
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    status: {
        type:String,
        enum: ["active", "inactive", "cancelled"],
        default: "active"
    }
})

module.exports = mongoose.model('Subscription', SubscriptionSchema)