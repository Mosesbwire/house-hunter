const planDAL = require('./planDAL')
const PlanError = require('./planError')

async function createPlan(planData){
    try {
        const plan = await planDAL.createPlan(planData)
        return plan
    } catch (error) {
        throw new PlanError("Failed to create plan", error)
    }
}

async function getPlans() {
    try {
        const plans = await planDAL.getAllPlans()
        return plans
    } catch (error) {
        throw new PlanError("Failed to get plans", error)
    }
}

async function getPlanById(planId) {
    try {
        const plan = await planDAL.getPlanById(planId)

        if (!plan) {
            throw PlanError("Plan does not exist")
        }

        return plan
    } catch (error) {
        throw new PlanError(`Failed to get plan with id ${planId}`, error)
    }
}

async function updatePlan(planId, planData) {
    try {
        const plan = await planDAL.updatePlan(planId, planData)

        if (!plan) {
            throw new PlanError("Plan does not exist")
        }

        return plan
    } catch (error) {
        throw new PlanError(`Failed to update plan ${planId}`, error)
    }
}

async function deletePlan(planId) {
    try {
        const plan = await planDAL.deletePlan(planId)

        if (!plan) {
            throw new PlanError("plan does not exist")
        }

        return plan
    } catch(error) {
        throw new PlanError(`Failed to delete plan ${planId}`, error)
    }
}

module.exports = {
    createPlan,
    getPlans,
    getPlanById,
    updatePlan,
    deletePlan
}