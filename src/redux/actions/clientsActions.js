import API from '../../services/axios';

export const deleteUser = (uid) => {
    return(dispatch,getState,{getFirebase, getFirestore}) => {
        debugger;
        API.post('clients', uid);
    }

}

export const userPagination = () => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('users')
        .orderBy('id', 'asc')
        .limit(2)
        .get()
        .then(() => {
            dispatch({type: "GET_USERS_SUCCESS"});
        })
        .catch((err) => {
            dispatch({type: "GET_USERS_ERROR"})
        });
    };
};