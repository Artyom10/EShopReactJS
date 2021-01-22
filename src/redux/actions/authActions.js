export const signIn = (credentials) => {
    debugger;
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'});
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err})
        });
    }
};

export const signOut = () => {
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'})
        });
    } 
}

export const signUp = (newUser) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        debugger;
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password,
        ).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                secondName: newUser.secondName,
                request: false, //newUser.request,
                bags: [], //newUser.bags,
                userPhoto: 'https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png',
                valuedProducts: [],//newUser.valuedProducts,
                isAdmin: false,
                isWho: 'user',
                email: newUser.email,
            })
        }).then(() => {
            dispatch({type: 'SIGNUP_SUCCESS'})
        }).catch(err => {
            dispatch({type: 'SIGNUP_ERROR', err})
        })
    }
}