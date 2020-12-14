export const addNewProduct = (newProduct) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("products")
      .add({
        ...newProduct,
        isBought: false,
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
    const firestore = getFirestore();
    firestore
      .collection("products")
      .doc(targetDeleteProduct)
      .delete()
      .then(() => {
        dispatch({ type: "REMOVE_PRODUCT", targetDeleteProduct });
      })
      .catch((err) => {
        dispatch({ type: "REMOVE_PRODUCT_ERROR", err });
      });
  };
};

export const editProduct = (targetEditProduct, newData) => {
  debugger;
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("products")
      .doc(targetEditProduct)
      .update({
        photo:  newData.photo,//(newData.photo == undefined || newData.photo == '') ? targetEditProduct.photo : newData.photo,
        producer: newData.producer,
        type: newData.type,
        price: newData.price,
        sizes: newData.sizes,
        tags: newData.tags,
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
    /*  console.log('This product already was rate, we need just update value')
      firestore.collection('users').doc(buyerId).update({
       valuedProducts: [{targetProductRating, value,}]
    })
    .then(() => {
      dispatch({ type: "RATE_PRODUCT", targetProductRating });
    })
    .catch((err) => {
      dispatch({ type: "RATE_PRODUCT_ERROR", err });
    });*/
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

  
       /* valuedProducts: firebaseBuyer.profile.valuedProducts
        ? {...firebaseBuyer.profile.valuedProducts, targetProductRating: value }
        : {targetProductRating: value},*/
          /*{
       targetProductRating,
     value, }
    })*/
    /*const firestore = getFirestore();
    firestore.collection('products').doc(targetProductRating).update({
      rate: value,*/ 