const {loginCustomer, authenticateUser} = require("./authentication")

const upload = require("./uploadFiles")


module.exports = {
    loginCustomer,
    authenticateUser,
    upload
}