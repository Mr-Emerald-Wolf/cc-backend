const express = require('express')
const router = express.Router()
const { getProduct ,findProduct,createProduct ,updateProduct, deleteProduct} = require('../controllers/productController')
 
router.post('/createProduct',createProduct)
router.get('/getProduct',getProduct)
router.get('/findProduct',findProduct)
router.put('/updateProduct',updateProduct)
router.delete('/deleteProduct',deleteProduct)
 
module.exports = router