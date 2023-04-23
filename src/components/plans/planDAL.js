const Plan = require('./plan')
const PlanError = require('./planError')

async function createPlan(planData){

    try {
        const plan = new Plan(planData)
        const savedPlan = await plan.save()
        return savedPlan
    } catch (error){
        throw new PlanError(error.message, 500)
    }
}

async function getAllPlans(){
    try {
        const plans = await Plan.find({})
        return plans

    } catch(error) {
        throw new PlanError(error.message, 500)
    }
}

async function getPlanById(planId) {
    try {
        const plan = await Plan.findById(planId)
        return plan
    } catch(error) {
        throw new PlanError(error.message, 500)
    }
}

async function updatePlan(planId, planData) {
    try {
        const updatedPlan = await Plan.findByIdAndUpdate(planId, planData, {new: true})
        return updatedPlan
    } catch (error) {
        throw new PlanError(error.message, 500)
    }
}

async function deletePlan(planId) {
    try {
        const plan = await Plan.findByIdAndDelete(planId)
        return plan
    } catch (error) {
        throw new PlanError(error.message, 500)
    }
}

module.exports = {
    createPlan,
    getAllPlans,
    getPlanById,
    updatePlan,
    deletePlan
}