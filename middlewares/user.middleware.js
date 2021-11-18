const {Types} = require('mongoose');

const {User} = require('../db');
const {ErrorHandler, enumStatus, enumMessage} = require('../errors');

module.exports = {
    isIdValid: async (req, res, next) => {
        try {
            const {user_id} = req.params;
            const idValid = Types.ObjectId.isValid(user_id);

            if (!idValid) {
                throw new ErrorHandler(enumMessage.BAD_REQUEST, enumStatus.BAD_REQUEST);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isBodyValid: (validator) => (req, res, next) => {
        try {
            const {error, value} = validator.validate(req.body);

            if (error) {
                throw new ErrorHandler(error.details[0].message, enumStatus.BAD_REQUEST);
            }

            req.body = value;
            next();
        } catch (e) {
            next(e);
        }
    },

    checkUser: async (req, res, next) => {
        try {
            const {user_id} = req.params;
            const user = await User.exists({_id: Types.ObjectId(user_id)});

            if (!user) {
                throw new ErrorHandler(enumMessage.BAD_REQUEST, enumStatus.BAD_REQUEST);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkKey: (key) => async (req, res, next) => {
        try {
            const item = req.body[key];
            const user = await User.findOne({[key]: item});

            if (user) {
                throw new ErrorHandler(enumMessage.BAD_REQUEST, enumStatus.BAD_REQUEST);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkKeyById: (key) => async (req, res, next) => {
        try {
            const item = req.body[key];
            const {user_id} = req.params;

            const user = await User.find({[key]: item, _id: {$ne: user_id}});

            if (!user) {
                throw new ErrorHandler(enumMessage.BAD_REQUEST, enumStatus.BAD_REQUEST);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
};
