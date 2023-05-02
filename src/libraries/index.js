const { initpassportLocalCustomer } = require("./passport/passportLocal")
const { hashPassword, comparePassword} = require("./bycrpt")
const { getReadImageUrl, upload_cloud_storage} = require("./google-cloud-plartform/cloud-storage/cloudStorage")

module.exports = {
    initpassportLocalCustomer,
    hashPassword,
    comparePassword,
    upload_cloud_storage,
    getReadImageUrl
}