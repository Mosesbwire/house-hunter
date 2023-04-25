const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CustomerAccountSchema = new Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },

    status: {
        type: String,
        enum: ['Active','Not Active' ],
        default: 'Active'
    },
    paymentHistory: [
        {
          date: Date,
          amount: Number,
          paymentMethod: String
        }
    ],
    balance: {
        type: Number,
        default: 0
    }

})

module.exports = mongoose.model('CustomerAccount', CustomerAccountSchema)