class PlanError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
        this.name = 'PlanError'
    }
}

module.exports = PlanError