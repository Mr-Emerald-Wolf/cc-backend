const express = require('express')
const router = express.Router()
const { getProduct ,findProduct,createProduct ,updateProduct, deleteProduct} = require('../controllers/productController')
const { verifyRole } = require("../middleware/VerifyRole");

router.post('/createProduct', verifyRole ,createProduct)
router.get('/getProduct' ,getProduct)
router.get('/findProduct',findProduct)
router.put('/updateProduct',verifyRole, updateProduct)
router.delete('/deleteProduct',verifyRole ,deleteProduct)
 
module.exports = router