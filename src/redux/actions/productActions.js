export const addNewProduct = (newProduct) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
   const firestore = getFirestore();
   firestore.collection('products').add({
       ...newProduct,
   }).then(() => {
    dispatch({type: 'ADD_PRODUCT', newProduct,});
   }).catch((err) => {
    dispatch({type: 'ADD_PRODUCT_ERROR', err})
   })
    }
};

export const removeProduct = (targetDeleteProduct) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('products').doc(targetDeleteProduct).delete()
        .then(() => {
            dispatch({type: 'REMOVE_PRODUCT', targetDeleteProduct,})
        }).catch((err) => {
            dispatch({type: 'REMOVE_PRODUCT_ERROR', err})
        })

       
    }
}

export const editProduct = (targetEditProduct) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('products').doc(targetEditProduct).update({
         photo: '',
         producer: '',
         type: '',
         price: '',
         sizes: '',
         tags: ''
        })
        .then(() => {
            dispatch({type: 'EDIT_PRODUCT', targetEditProduct})
        }).catch((err) => {
            dispatch({type: 'EDIT_PRODUCT_ERROR', err})
        })
    }


}
/*
export const addToBag = (targetAddToBag) => {
    return (dispatch, getState) => {
        dispatch({type: 'ADD_TO_BAG', targetAddToBag})
    }
}*/