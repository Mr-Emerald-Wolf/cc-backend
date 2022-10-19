const express = require('express')
const router = express.Router()

const user = require('./user')
const product = require('./products')

router.use('/users', user)
router.use('/product', product)

module.exports = router