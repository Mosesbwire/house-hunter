const { body, validationResult} = require("express-validator")

async function validateListingData(req) {
    const validations = [
        body("name")
            .optional()
            .trim()
            .isLength({min: 2, max: 30})
            .escape(),
        body("geoLocation.*")
            .trim()
            .notEmpty()
            .withMessage("Location coordinates are required")
            .isNumeric()
            .withMessage("Coordintates must be numeric")
            .isLength({min: 1, max: 6}),
        body("geoLocation.latitude")
            .isInt({min: -90, max: 90})
            .withMessage("Latitude must be between -90 and 90"),
        body("geoLocation.longitude")
            .isInt({min: -180, max: 180}),
        body("location.mainLocation")
            .trim()
            .notEmpty()
            .withMessage("Location can not be empty")
            .isLength({min: 2, max: 30})
            .withMessage("Name length can be between 2 and 30 characters"),
        body("location.subLocation")
            .optional()
            .isLength({min: 2, max: 30})
            .withMessage("Name length can be between 2 and 30 characters"),
        body("location.locationIdentifiers")
            .optional()
            .isLength({min: 2, max: 30})
            .withMessage("Name length can be between 2 and 30 characters"),
        body("details.bedrooms")
            .trim()
            .notEmpty()
            .withMessage("Bedrooms cannot be empty")
            .isNumeric()
            .withMessage("Number of bedrooms must be a number")
            .isInt({min: 0, max: 10})
            .withMessage("Number of bedrooms must be between 0 and 10"),
        body("details.buildingType")
            .isIn(['Apartment', 'Bungalow', 'Massionette', 'Villa', 'Plots']),
        body("details.masterEnsuite")
            .optional()
            .isBoolean()
            .withMessage("Can only be true or false"),
        body("details.bathrooms")
            .optional()
            .isNumeric()
            .withMessage("Number of bathrooms must be numeric")
            .isInt({min: 0})
            .withMessage("Listing must have a bathroom"),
        body("onMarket")
            .isBoolean()
            .withMessage("Availabilty can be either true or false"),
        body("rentPrice")
            .trim()
            .notEmpty()
            .withMessage("Rent price must be provided")
            .isNumeric()
            .withMessage("Rent price must be a number")
            .isInt({min: 5000, max: 500000})
            .withMessage("Rent prices can range from 5000- 500000")
    ]

    await Promise.all(validations.map((validation)=> validation.run(req)))

    const errors = validationResult(req)

    return errors

}

module.exports = {
    validateListingData
}