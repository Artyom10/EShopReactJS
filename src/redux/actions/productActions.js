export const addNewProduct = (newProduct) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const storage = getFirebase().storage();

    const infoPhoto = newProduct.photo;
    newProduct.photo = null;

    firestore
      .collection("products")
      .add({
        ...newProduct,
        isBought: false,
      })
      .then((response) => {
        infoPhoto &&
        storage
          .ref(`photos/${response.id}`)
          .put(infoPhoto)
          .on(
            'state_changed',
            snapshot => { },
            error => { console.log(error) },
            () => {
              storage
                .ref('photos')
                .child(response.id)
                .getDownloadURL()
                .then(url => {
                  newProduct.photo = url
                  return firestore
                    .collection('products')
                    .doc(response.id)
                    .update({photo: newProduct.photo})
                })
            }
          )
      })
      .then(() => {
        dispatch({ type: "ADD_PRODUCT", newProduct });
      })
      .catch((err) => {
        dispatch({ type: "ADD_PRODUCT_ERROR", err });
      });
  };
};

export const removeProduct = (targetDeleteProduct) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log(getState());
    const firestore = getFirestore();
    const storage = getFirebase().storage();
    firestore
      .collection("products")
      .doc(targetDeleteProduct)
      .get()
      .then((doc) => {
        firestore
          .collection('products')
          .doc(targetDeleteProduct)
          .delete()
          .then(() => {
            doc.data().photo && 
            storage
              .ref(`photos/${targetDeleteProduct}`)
              .delete()
          })
      })
      .then(() => {
        dispatch({ type: "REMOVE_PRODUCT", targetDeleteProduct });
      })
      .catch((err) => {
        dispatch({ type: "REMOVE_PRODUCT_ERROR", err });
      });

      const buyerId = getState().firebase.auth.uid;
      const firebaseBuyer = getState().firebase;
      let findIndex = null;

      let ratedProducts = firebaseBuyer.profile.valuedProducts;
      ratedProducts.forEach((product,index) => {
        if(product.targetProductRating === targetDeleteProduct){
                findIndex = index;       
        }
      });
      ratedProducts.splice(findIndex,1);

      let findBagsIndex = null;

      let bagsProducts = firebaseBuyer.profile.bags;
      bagsProducts.forEach((product,index) => {
        if(product === targetDeleteProduct){
          findBagsIndex = index
        }
      });
      bagsProducts.splice(findBagsIndex,1);
  
      firestore.collection('users').doc(buyerId).update({
       valuedProducts:   ratedProducts && [...ratedProducts],
       bags: bagsProducts && [...bagsProducts],
      })
      .then(() => {
        dispatch({ type: "REMOVE_PRODUCT" });
      })
      .catch((err) => {
        dispatch({ type: "REMOVE_PRODUCT_ERROR", err });
      });


  };
};

export const editProduct = (targetEditProduct, changes) => {
  debugger;
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const storage = getFirebase().storage();
    typeof changes.photo !== 'string' &&  changes.photo
    ?
    storage
      .ref('photos')
      .child(targetEditProduct)
      .put(changes.photo)
      .on(
        'state_changed',
        snapshot => { },
        error => { console.log(error) },
        () => {
          storage
           .ref('photos')
           .child(targetEditProduct)
           .getDownloadURL()
           .then(url => {
             changes.photo = url
             return firestore
               .collection('products')
               .doc(targetEditProduct)
               .update({
                 ...changes
               })
           })
           .then(() => {
            dispatch({ type: "EDIT_PRODUCT", targetEditProduct });
          })
          .catch((err) => {
            dispatch({ type: "EDIT_PRODUCT_ERROR", err });
          });
        }
      )
      :
      firestore
        .collection('products')
        .doc(targetEditProduct)
        .update({
          ...changes
        })
        .then(() => {
          dispatch({ type: "EDIT_PRODUCT", targetEditProduct });
        })
        .catch((err) => {
          dispatch({ type: "EDIT_PRODUCT_ERROR", err });
        });
  };
};

export const buyProduct = (targetProductBuy) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const buyerId = getState().firebase.auth.uid;
    const firebaseBuyer = getState().firebase;
    firestore
      .collection("products")
      .doc(targetProductBuy)
      .update({
        isBought: true,
      })
      .then(() => {
        dispatch({ type: "UPDATE_BOUGHT_PRODUCT_STATUS", targetProductBuy });
      })
      .catch((err) => {
        dispatch({ type: "AUPDATE_BOUGHT_PRODUCT_STATUS_ERROR", err });
      });

    firestore
      .collection("users")
      .doc(buyerId)
      .update({
        bags: firebaseBuyer.profile.bags
          ? [...firebaseBuyer.profile.bags, targetProductBuy]
          : [targetProductBuy],
      })
      .then(() => {
        dispatch({ type: "ADD_TO_BOUGHT", targetProductBuy });
      })
      .catch((err) => {
        dispatch({ type: "ADD_TO_BOUGHT_ERROR", err });
      });
  };
};

export const setRating = (targetProductRating, value, certainProduct) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const buyerId = getState().firebase.auth.uid;
    const firebaseBuyer = getState().firebase;
  
    if(firebaseBuyer.profile.valuedProducts.some((everyData) => everyData.targetProductRating === targetProductRating)){
    console.log('You have already rated this product, please delete your rate and try again');
    }
    else{
          console.log('This product does not rate yet, we need update product and value')
          firestore.collection('users').doc(buyerId).update({
            valuedProducts: [...firebaseBuyer.profile.valuedProducts, {targetProductRating, value,}],
        })
        .then(() => {
          dispatch({ type: "RATE_PRODUCT", targetProductRating });
        })
        .catch((err) => {
          dispatch({ type: "RATE_PRODUCT_ERROR", err });
        });
    }
  }
}

export const deleteRating = (targetProductDeleteRating) => {
  debugger;
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const buyerId = getState().firebase.auth.uid;
    const firebaseBuyer = getState().firebase;
    let findIndex = null;

    let ratedProducts = firebaseBuyer.profile.valuedProducts;
    ratedProducts.forEach((product,index) => {
      if(product.targetProductRating === targetProductDeleteRating){
              findIndex = index;       
      }
    });
    ratedProducts.splice(findIndex,1);

    firestore.collection('users').doc(buyerId).update({
     valuedProducts:   ratedProducts && [...ratedProducts]
    })
    .then(() => {
      dispatch({ type: "DELETE_RATE_PRODUCT", targetProductDeleteRating });
    })
    .catch((err) => {
      dispatch({ type: "DELETE_RATE_PRODUCT_ERROR", err });
    });
  }
}


export const deleteBooked = (productId) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    debugger;
    const firestore = getFirestore();
    const buyerId = getState().firebase.auth.uid;
    const firebaseBuyer = getState().firebase;
    let findIndex = null;

    let bagsProducts = firebaseBuyer.profile.bags;
    bagsProducts.forEach((product,index) => {
      if(product === productId){
              findIndex = index;       
      }
    });
    bagsProducts.splice(findIndex,1);

    firestore.collection('products').doc(productId).update({
      isBought: false,
    })
    .catch((err) => {
      dispatch({type: "DELETE_BAG_PRODUCT_ERROR", err});
    })
    
    firestore.collection('users').doc(buyerId).update({
      bags:   bagsProducts && [...bagsProducts]
     })
     .then(() => {
       dispatch({ type: "DELETE_BAG_PRODUCT" });
     })
     .catch((err) => {
       dispatch({ type: "DELETE_BAG_PRODUCT_ERROR", err });
     });
   }
}