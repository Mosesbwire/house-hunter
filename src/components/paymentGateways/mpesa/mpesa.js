const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MpesaSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },

    middleName: {
        type: String
    },

    lastName: {
        type: String
    },
    MSISDN: {
        type: String,
        required: true
    },
    transactionAmount: {
        type: Number,
        required: true
    },
    transactionId: {
        type: String,
        required: true,
        unique: true
    },
    accountNumber: {
        type: String,
        required: true
    },

    transactionTime: {
        type: Date,
        required: true
    },

    transactionType: {
        type: String,
        required: true
    },
    paymentGatewayName: {
        type: String,
        default: 'mpesa'
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Mpesa',MpesaSchema)