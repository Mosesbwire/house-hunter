
const LocalStrategy = require("passport-local")
const { comparePassword } = require("../bycrpt")

const options = {
    usernameField: 'email',
    passwordField: 'password'
}

const verify = async (email, password, cb) => {

    const { getCustomerByEmail } = require("../../components/customers")
    try {
        const customer = await getCustomerByEmail(email)

        if (!customer) {
            return cb(null, false, {message: 'Incorrect email or password'})
        }
        const isValidPassword = await comparePassword(password, customer.password)
        if (!isValidPassword) {
            return cb(null, false, {message: 'Incorrect email or password'})
        }

        customer.password = null
        return cb(null, customer)
    } catch (error) {

        return cb(error)
    }
}


function initpassportLocalCustomer(passport) {
    
    passport.use('local', new LocalStrategy(options, verify))

    passport.serializeUser(function(customer, cb) {
        process.nextTick(function(){
            cb(null, customer)
        })
    })

    passport.deserializeUser(function(customer, cb) {
        process.nextTick(function(){
            return cb(null, customer)
        })
    })
}

module.exports = {

    initpassportLocalCustomer
}

