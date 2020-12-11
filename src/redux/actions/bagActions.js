/*export const removeFromBag = (removeTargetBag) => {
    return (dispatch, getState) => {
 dispatch({ type: 'REMOVE_FROM_BAG', removeTargetBag,})
    }
}*/

export const addToBag = (targetAddToBag) => {
    return (dispatch, getState,{getFirebase, getFirestore}) => {
     const firestore = getFirestore();
     //const profile = getState()
     const buyerId = getState().firebase.auth.uid
     firestore.collection('users').doc(buyerId).update({
            bags: [targetAddToBag]
     })
     .then(() => {
         dispatch({type: 'ADD_TO_BAG', targetAddToBag})
     }).catch((err) => {
         dispatch({type: 'ADD_TO_BAG_ERROR', err})
     })
    }
}


 //dispatch({type: 'ADD_TO_BAG', targetAddToBag})