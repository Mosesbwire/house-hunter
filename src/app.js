var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectDB = require('../config/db.config')
const { customerApi } = require('./components/customers/index')
const { listingApi } = require("./components/listings/index")

var app = express();
connectDB()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/customers', customerApi)
app.use('/api/v1/listings', listingApi)


module.exports = app;
