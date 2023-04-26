const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PaymentSchema = new Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    account_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    payee_details : {
        MSISDN: {
            type: String
        },
        first_name: {
            type: String
        },
        middle_name: {
            type: String
        },
        last_name: {
            type: String
        }
    },
    transaction_time: {
        type: String,
        required: true,
    },
    account_number: {
        type: String,
        required: true
    },
    payment_method: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Payment', PaymentSchema)