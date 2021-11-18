module.exports = {
    MONGO_CONNECT_URL: process.env.MONGO_CONNECT_URL || 'mongodb://localhost:27017/users',
    PORT: process.env.PORT || 5000,

    PASSWORD_REGEXP: new RegExp(/^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/),
    EMAIL_REGEXP: new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$'),

    KEY_EMAIL: 'email',
    KEY_USER_NAME: 'userName',

    NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL || 'email@gmail.com',
    NO_REPLY_EMAIL_PASSWORD: process.env.NO_REPLY_EMAIL_PASSWORD || 123456,
    CREATE: 'create',
};
