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

export const editProduct = (targetEditProduct) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("products")
      .doc(targetEditProduct)
      .update({
        photo: "",
        producer: "",
        type: "",
        price: "",
        sizes: "",
        tags: "",
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
