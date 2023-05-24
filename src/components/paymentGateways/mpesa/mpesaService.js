const MpesaDAL = require('./mpesaDAL')
const {getCustomerAccountByAccountNumber} = require('../../customerAccount') 
const { createSubscription } = require('../../subscription')

async function createTransactionRecord(transactionData){
    try {
        const {
            FirstName,
            MiddleName,
            LastName,
            MSISDN,
            BillRefNumber,
            TransAmount,
            TransID,
            TransTime,
            TransactionType
        } = transactionData
       
        const record = await MpesaDAL.createMpesaTransactionRecord({
            firstName: FirstName,
            middleName: MiddleName,
            lastName: LastName,
            MSISDN: MSISDN,
            accountNumber: BillRefNumber,
            transactionAmount: TransAmount,
            transactionTime: TransTime,
            transactionId: TransID,
            transactionType: TransactionType
        })

        return record
    } catch (error){
        console.error(error)
    }
}

module.exports = {
    createTransactionRecord
}

