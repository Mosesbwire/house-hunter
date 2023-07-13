const createQueue = require('./queue')

class UpdateClientSideQueue {
    constructor(){
        if (!UpdateClientSideQueue.instance){
            UpdateClientSideQueue.instance = createQueue()
        }

        return UpdateClientSideQueue.instance
    }

}

const UpdateClientSideQueueInstance = new UpdateClientSideQueue()

module.exports = UpdateClientSideQueueInstance