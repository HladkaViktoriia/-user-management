const FORM_USER = 'form_user';
const FORM_MESSAGE = 'form_message';
const USER = 'user';

const stateFormUser = (payload) => {
    return {type: FORM_USER, payload};
}

const stateFormMessage = (payload) => {
    return {type: FORM_MESSAGE, payload};
}

const stateUser = (payload) => {
    return {type: USER, payload};
}

export {
    FORM_USER, stateFormUser,
    FORM_MESSAGE, stateFormMessage,
    USER, stateUser,
};
