const router = require('express').Router();

const {constants} = require('../configs');
const {userController} = require('../controllers');
const {userMiddleware} = require('../middlewares');
const {userValidator} = require('../validators');

router.get(
    '/',
    userController.getUsers);

router.post(
    '/',
    userMiddleware.isBodyValid(userValidator.userValidator),
    userMiddleware.checkKey(constants.KEY_USER_NAME),
    userMiddleware.checkKey(constants.KEY_EMAIL),
    userController.createUser);

router.put(
    '/:user_id',
    userMiddleware.isIdValid,
    userMiddleware.isBodyValid(userValidator.userValidator),
    userMiddleware.checkUser,
    userMiddleware.checkKeyById(constants.KEY_USER_NAME),
    userMiddleware.checkKeyById(constants.KEY_EMAIL),
    userController.updateUser);

router.delete(
    '/:user_id',
    userMiddleware.isIdValid,
    userMiddleware.checkUser,
    userController.deleteUser);

module.exports = router;
