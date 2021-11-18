const Joi = require('joi');

const {constants, userTypesEnum} = require('../configs');

const userValidator = Joi.object({
    userName: Joi
        .string()
        .alphanum()
        .min(3)
        .max(30)
        .trim(),
    firstName: Joi
        .string()
        .alphanum()
        .min(3)
        .max(30)
        .trim(),
    lastName: Joi
        .string()
        .alphanum()
        .min(3)
        .max(30)
        .trim(),
    type: Joi
        .string()
        .allow(...Object.values(userTypesEnum)),
    email: Joi
        .string()
        .regex(constants.EMAIL_REGEXP)
        .required()
        .trim(),
    password: Joi
        .string()
        .min(8)
        .regex(constants.PASSWORD_REGEXP)
        .required(),
});

module.exports = {
    userValidator
};
