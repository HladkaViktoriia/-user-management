import {userModel} from '../../configs';
import {
    FORM_USER,
    FORM_MESSAGE,
    USER
} from "../action";

let initialState = {
    formUser: '',
    message: {class: '', text: ''},
    user: userModel,
}
export const domReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORM_USER:
            return {...state, formUser: action.payload};
        case FORM_MESSAGE:
            return {...state, message: {...action.payload}};
        case USER:
            return {...state, user: {...action.payload}};
        default:
            return state;
    }
}