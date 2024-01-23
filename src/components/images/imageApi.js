const express = require('express')
const { fetchImage } = require('./imageController')

const router = express.Router()

router.get('/:id', fetchImage);

module.exports = router;