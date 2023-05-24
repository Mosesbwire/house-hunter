const Mpesa = require('./mpesa')

async function createMpesaTransactionRecord(transactionData){

    try {
        const transactionRecord = new Mpesa(transactionData)
        const savedRecord = await transactionRecord.save()

        return savedRecord

    } catch (error){
        const errors = error.errors
        console.log(errors)
    }
}

module.exports = {
    createMpesaTransactionRecord
}