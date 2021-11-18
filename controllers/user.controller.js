const {constants} = require('../configs');
const {User} = require('../db');
const {enumStatus, enumMessage} = require('../errors');
const {passwordService, emailService} = require('../services');
const {userUtil} = require('../util');

module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await User.find();

            res.json(users);
        } catch (e) {
            res.json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            const hashedPassword = await passwordService.hash(req.body.password);
            const {name: userName} = req.body;

            let newUser = await User.create({...req.body, password: hashedPassword});

            await emailService.sendMail(req.body.email, constants.CREATE, {userName});

            newUser = userUtil.userNormalizator(newUser.toObject());

            res.status(enumStatus.CREATED).json(newUser);
        } catch (e) {
            res.json(e.message);
        }
    },

    updateUser: async (req, res) => {
        try {
            const {user_id} = req.params;
            const hashedPassword = await passwordService.hash(req.body.password);

            await User.updateOne({_id: user_id.toString()}, {$set: {...req.body, password: hashedPassword}});

            res.status(enumStatus.CREATED).json(enumMessage.UPDATED);
        } catch (e) {
            res.json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const {user_id} = req.params;

            await User.deleteOne({_id: user_id.toString()});

            res.sendStatus(enumStatus.NO_CONTENT);
        } catch (e) {
            res.json(e.message);
        }
    },
};