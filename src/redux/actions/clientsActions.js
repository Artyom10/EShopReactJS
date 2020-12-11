/*export const updateProfile = (firstName, secondName) => {
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
}*/