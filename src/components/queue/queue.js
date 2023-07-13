function createQueue(){
    const items = []

    function enqueue(item){
        items.push(item)
    }

    function isEmpty(){
        return items.length === 0
    }

    function dequeue(){
        if (isEmpty()){
            return null
        }

        return items.shift()
    }

    return {
        enqueue,
        isEmpty,
        dequeue
    }
}

module.exports =  createQueue