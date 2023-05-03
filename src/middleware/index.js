const {loginCustomer, authenticateUser, loginCredentialsValidations} = require("./authentication")

const upload = require("./uploadFiles")


module.exports = {
    loginCustomer,
    authenticateUser,
    loginCredentialsValidations,
    upload
}