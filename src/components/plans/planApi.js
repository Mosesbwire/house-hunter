const express = require("express")
const { 
    createPlan,
    getAllPlans,
    getPlanById,
    updatePlan,
    deletePlan
} = require('./planController')

const router = express.Router()

// POST /api/v1/plans

router.post('/', createPlan)

// GET /api/v1/plans

router.get('/', getAllPlans)

// GET /api/v1/plans/:id

router.get('/:id', getPlanById)

// PUT /api/v1/plans/:id

router.put('/:id', updatePlan)

// DELETE /api/v1/plans/:id

router.delete('/:id', deletePlan)

module.exports = router