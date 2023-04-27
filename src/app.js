var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require("cookie-parser")
const passport = require("passport")
const session = require("express-session")
const connectDB = require('../config/db.config')
const { customerApi } = require('./components/customers')
const { listingApi } = require("./components/listings")
const { planApi } = require("./components/plans")
const { authApi } = require("./components/auth")
const { initpassportLocalCustomer } = require("./libraries")

var app = express();
connectDB()

initpassportLocalCustomer(passport)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(session({
    secret: 'new keyboard',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/api/v1/auth', authApi)
app.use('/api/v1/customers', customerApi)
app.use('/api/v1/listings', listingApi)
app.use('/api/v1/plans', planApi)

module.exports = app;
