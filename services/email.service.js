const nodemailer = require('nodemailer');
const EmailTemplate = require('email-templates');
const path = require('path');

const {constants} = require('../configs');
const allTemplates = require('../email-templates');
const {ErrorHandler, enumMessage} = require('../errors');

const templateParser = new EmailTemplate({
    views: {
        root: path.join(process.cwd(), 'email-templates'),
    }
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: constants.NO_REPLY_EMAIL,
        pass: constants.NO_REPLY_EMAIL_PASSWORD,
    },
});

const sendMail = async (userMail, emailAction, context = {}) => {
    const templateInfo = allTemplates[emailAction];

    if (!templateInfo) {
        throw new ErrorHandler(enumMessage.WRONG_TEMPLATE);
    }

    const html = await templateParser.render(templateInfo.templateName, context);

    return transporter.sendMail({
        from: 'No reply',
        to: userMail,
        subject: templateInfo.subject,
        html,
    });
};

module.exports = {
    sendMail,
};