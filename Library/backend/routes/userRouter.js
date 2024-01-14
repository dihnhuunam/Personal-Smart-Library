const userController = require('../controllers/userController');

// User routes
const router = require('express').Router();
router.post('/addUser/', userController.addUser);
router.get('/getAllUsers', userController.getAllUsers);
router.get('/getOneUser/:id', userController.getOneUser);
router.put('/updateUser/:id', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUser);
router.put('/updateUserByEmail/:email', userController.updateUserByEmail); 

module.exports = router;
