const {body, validationResult} = require("express-validator")

async function validatePlanData(req){
    const validations = [
        body("name")
            .trim()
            .notEmpty()
            .withMessage("Plan must have a name"),
        body("description")
            .optional()
            .trim()
            .notEmpty()
            .withMessage("Description can not be blank")
            .isLength({min: 30, max: 150})
            .withMessage("Description length should range from 30 - 150 characters"),
        body("price")
            .trim()
            .notEmpty()
            .withMessage("Price is required")
            .isInt({min: 1})
            .withMessage("Price can not be less than 1")
            .isNumeric()
            .withMessage("Price must be a numeric value"),
        body("duration")
            .trim()
            .notEmpty()
            .withMessage("Plan must have a specified duration")
            .isNumeric()
            .withMessage("Duration must be a numeric value")
            .isInt({min: 1, max: 30})
            .withMessage("Plan durations must range from 1 day to max 30 days"),

        body("isActive")
            .isBoolean()
            .withMessage("isActive can be only true or false")
    ]

    await Promise.all(validations.map((validation)=> validation.run(req)))

    const errors = validationResult(req)

    return errors
}

module.exports = {
    validatePlanData
}