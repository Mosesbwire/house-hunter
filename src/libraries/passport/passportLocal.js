const passport = require("passport")

const LocalStrategy = require("passport-local").Strategy
const { getCustomerByEmail } = require("../../components/customers")
const { comparePassword } = require("../bycrpt")

const options = {
    usernameField: 'email',
    passwordField: 'password'
}

const verify = async (email, password, cb) => {
    try {
        const customer = await getCustomerByEmail(email)

        if (!customer) {
            return cb(null, false, {message: 'Incorrect email or password'})
        }
        const isValidPassword = await comparePassword(password, customer.password)
        if (!isValidPassword) {
            return cb(null, false, {message: 'Incorrect email or password'})
        }

        return cb(null, customer)
    } catch (error) {

        return cb(error)
    }
}
passport.use('local-customer', new LocalStrategy(options, verify))

passport.serializeUser(function(customer, cb) {
    process.nextTick(function(){
        cb(null,{id: customer._id})
    })
})

passport.deserializeUser(function(customer, cb) {
    process.nextTick(function(){
        return cb(null, customer)
    })
})