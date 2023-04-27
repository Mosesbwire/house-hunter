const { initpassportLocalCustomer } = require("./passport/passportLocal")
const { hashPassword, comparePassword} = require("./bycrpt")

module.exports = {
    initpassportLocalCustomer,
    hashPassword,
    comparePassword
}