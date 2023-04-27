const passport = require("passport")

function loginCustomer(req, res, next) {
    
    passport.authenticate('local', async function(err, customer, info){
    
        if (err) {
            return res.status(500).json({message: 'Internal server error', error: err.message})
        }

        if (!customer) {
            return res.status(401).json({error: info.message})
        }

        try {
            await req.login(customer,()=>{
                return next()
            })
        }catch (error){
            console.log(error)
            return res.status(500).json({error: 'Internal server error'})
        }
    })(req, res, next)
}

function authenticateUser(req, res, next) {
    if (req.isAuthenticated()){
        next()
    } else {
        res.status(401).json({message: "You are not logged in. Kindly log in to access this resource."})
    }
}

module.exports = {
    loginCustomer,
    authenticateUser
}