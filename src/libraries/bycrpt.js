const bcrypt = require("bcryptjs")

const ROUNDS = 10

async function generateSalt() {
    try {
        const salt = await bcrypt.genSalt(ROUNDS)
        if (typeof salt === 'string' && salt.startsWith('$2a$')){
            return salt
        } else {
            throw new Error('Invalid salt generated')
        }

    } catch (err){
        console.error('Error generating salt', err)
        throw new Error(`Error generating salt: ${err.message}`)
    }
}
async function hashPassword(password) {
    try {
        const salt = await generateSalt()
        const encryptedPassword = await bcrypt.hash(password, salt)
        return encryptedPassword

    } catch(err){
        throw new Error(`Error hashing password: ${err.message}`)
    }
}

async function comparePassword(password, encryptedPassword) {
    try {
        const match = await bcrypt.compare(password, encryptedPassword)
        return match
    } catch(err) {
        throw new Error(`Error comparing password: ${err.message}`)
    }
}

module.exports = {
    hashPassword,
    comparePassword
}