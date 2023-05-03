const PlanService = require('./planService')
const PlanError = require('./planError')
const { validatePlanData } = require("./validation")

async function createPlan(req, res, next) {
    try {
        const errors = await validatePlanData
        if (!errors.isEmpty()){
            return res.status(422).json({error: errors.array()})
        }
        const plan = await PlanService.createPlan(req.body)
        res.status(201).json(plan)
    } catch (err) {
        if (err instanceof PlanError) {
            res.status(400).json({error: err.message})
        } else {
            next(err)
        }
    }
}

async function getAllPlans(req, res, next) {
    try {
        const plans = await PlanService.getPlans()
        res.status(200).json({plans: plans})
    } catch (err) {
        if (err instanceof PlanError) {
            res.status(400).json({error: err.message})
        } else {
            next(err)
        }
    }
}

async function getPlanById(req, res, next) {
    try {
        const plan = await PlanService.getPlanById(req.params.id)
        res.status(200).json(plan)
    } catch (err) {
        if (err instanceof PlanError) {
            res.status(400).json({error: err.message})
        } else {
            next(err)
        }
    }
}

async function updatePlan(req, res, next) {
    try {
        const plan = await PlanService.updatePlan(req.params.id, req.body)
        res.status(200).json(plan)
    } catch (err) {
        if (err instanceof PlanError){
            res.status(400).json(plan)
        } else {
            next(err)
        }
    }
}

async function deletePlan(req, res, next) {
    try {
        await PlanService.deletePlan(req.params.id)
        res.sendStatus(204)
    } catch (err) {
        if (err instanceof PlanError) {
            res.status(400).json({error: err.message})
        } else {
            next(err)
        }
    }
}

module.exports = {
    createPlan,
    getAllPlans,
    getPlanById,
    updatePlan,
    deletePlan
}