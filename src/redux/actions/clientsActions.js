import API from '../../services/axios';

export const deleteUser = (uid) => {
    return(dispatch,getState,{getfirebase, getFirestore}) => {
        API.post('clients', uid);
    }

}