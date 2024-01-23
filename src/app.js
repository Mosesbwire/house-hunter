var express = require('express');
var path = require('path');
var logger = require('morgan');
const passport = require("passport")
const session = require("express-session")
const mongoStore = require("connect-mongo")
const cors = require("cors")
const uuid = require("uuid")
const connectDB = require('../config/db.config')
require('dotenv').config()
const { customerApi } = require('./components/customers')
const { listingApi } = require("./components/listings")
const { planApi } = require("./components/plans")
const { authApi } = require("./components/auth")
const { mpesaApi } = require("./components/paymentGateways/mpesa")
const { imageApi } = require("./components/images")
const { initpassportLocalCustomer } = require("./libraries")
const errorHandler = require('./middleware/errorHandler')

var app = express();
const dbString = process.env.MONGO_URL
connectDB(dbString)

initpassportLocalCustomer(passport)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())

const cookie_secure = process.env.NODE_ENV === "production"


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
   
    store: mongoStore.create({mongoUrl: process.env.MONGO_URL}),
    genid: ()=> {
        return uuid.v4()
    },
    cookie: {
        maxAge: 24 * 60  * 60 * 1000,
        secure: cookie_secure
    }
}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res)=>{

    res.send('This is a test route')
})

app.use('/api/v1/auth', authApi)
app.use('/api/v1/customers', customerApi)
app.use('/api/v1/listings', listingApi)
app.use('/api/v1/plans', planApi)
app.use('/api/v1/payments', mpesaApi)
app.use('/api/v1/images', imageApi)

app.use(errorHandler)

module.exports = app;
