const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },

    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    subscription: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subscription'
    },
    paymentHistory: [
        {
          date: Date,
          amount: Number,
          paymentMethod: String
        }
    ]
})

module.exports = mongoose.model('Customer', CustomerSchema);