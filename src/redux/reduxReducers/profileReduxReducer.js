import { handleActions} from 'redux-actions';
import produce from 'immer';

import {updateProfileReduxAction} from '../reduxActions/profileReduxActions';

export const initialState = {
    error: '',
    loading: false,
};

const profileReduxReducer = handleActions(
    {
        [updateProfileReduxAction]: produce(state => {
            state.loading = true;
        }),

    },
    initialState
);

export default profileReduxReducer;