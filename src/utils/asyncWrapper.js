async function asyncWrapper(promise){
    const [{ value, reason }] = await Promise.allSettled([promise])
    return { data: value, error: reason }
}

module.exports = asyncWrapper