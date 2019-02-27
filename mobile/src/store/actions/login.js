// action creaters go here in form of:

import {LOGIN_USER} from './actionTypes'

export const loginUser = (creds) => {
    return {
        type: LOGIN_USER,
        payload: creds
    };
};