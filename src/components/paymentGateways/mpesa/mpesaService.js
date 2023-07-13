const MpesaDAL = require('./mpesaDAL')
const { updateClientSideQueue } = require('../../queue')
const {getPlanById} = require('../../plans')

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

async function planPrice(planId){
    try {
        const plan = await getPlanById(planId)
        if (!plan){
            return null
        }

        return plan.price
    }catch (error){
        console.error(error)
        
    }
}

function queueTransaction(transactionData){
    updateClientSideQueue.enqueue(transactionData)
}

module.exports = {
    createTransactionRecord,
    planPrice,
    queueTransaction
}

