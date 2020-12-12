export const updateProfile = (firstName, secondName) => {
    return (dispatch, getState,{getFirebase, getFirestore}) => {
     const firestore = getFirestore();
     const profile = getState().firebase.auth.uid
     firestore.collection('users').doc(profile).update({
            firstName,
            secondName,
     })
     .then(() => {
         dispatch({type: 'UPDATE_PROFILE'})
     }).catch((err) => {
         dispatch({type: 'UPDATE_PROFILE_ERROR', err})
     })
    }
}

export const removeRequest = (user) => {
    debugger;
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.auth.uid
        firestore.collection('users').doc(profile).update({
            request: true,
        })
        .then(() => {
            dispatch({type: 'UPDATE_PROFILE_REQUEST'})
        }).catch((err) => {
            dispatch({type: 'UPDATE_PROFILE_REQUEST_ERROR', err})
        })
    }
}