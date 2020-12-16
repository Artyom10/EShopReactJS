import {createAction} from 'redux-actions';


export const updateProfileReduxAction = createAction(
    "@PROFILE/UPDATE_PROFILE_SUCCES",
    payload => payload
);

