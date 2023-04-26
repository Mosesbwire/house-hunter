const passport = require("passport")

function authenticateCustomer(req, res, next) {
    passport.authenticate('local-customer', async function(err, customer, info){
        if (err) {
            return res.status(500).json({message: 'Internal server error', error: err.message})
        }

        if (!customer) {
            return res.status(401).json({error: info.message})
        }

        try {
            await req.login(customer, {session: false})
            return next()
        }catch (error){
            return res.status(500).json({error: 'Internal server error'})
        }
    })(req, res, next)
}

module.exports = {
    authenticateCustomer
}