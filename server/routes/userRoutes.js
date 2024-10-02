const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:id', userController.getUser); //get user
router.put('/:id', userController.updateUser); //update user
router.delete('/:id', userController.deleteUser); //delete user

module.exports = router;
