const {Schema, model} = require('mongoose');

const {userTypesEnum} = require('../configs');

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        default: userTypesEnum.DRIVER,
        enum: Object.values(userTypesEnum),
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: false,
    },

}, {timestamps: true});

module.exports = model('user', userSchema);
