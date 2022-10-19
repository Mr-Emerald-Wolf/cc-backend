const express = require('express')
const router = express.Router()
const { getUser ,findUser,createUser ,updateUser, deleteUser} = require('../controllers/userController')
 
router.post('/createUser',createUser)
router.get('/getUser',getUser)
router.get('/findUser',findUser)
router.put('/updateUser',updateUser)
router.delete('/deleteUser',deleteUser)
 
module.exports = router