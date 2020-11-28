const ADD_PRODUCT = 'ADD-PRODUCT';
const UPDATE_NEW_PRODUCT = 'UPDATE-NEW-PRODUCT';
const UPDATE_PRODUCT = 'UPDATE-PRODUCT';
const EDIT_PRODUCT = 'EDIT-PRODUCT';
const REMOVE_PRODUCT = 'REMOVE-PRODUCT';

const productPagesReducer = (state, action) => {

  switch(action.type){
    case ADD_PRODUCT:
        const result = { ...state.newProductObject };
        state.products.push(result);
        state.newProductObject = {};
        return state;
    case UPDATE_NEW_PRODUCT:
        state.newProductObject = { ...action.newProduct };
        return state;
    case UPDATE_PRODUCT: //Не реализованно
        state.newUpdateObject = {...action.updatedProduct};
        return state;
    case EDIT_PRODUCT: //Не реализованно
        const resultEdit = {...state.newUpdateObject};
        state.products.forEach((product, index) => {
          if(resultEdit.id === product.id){
            product = {...result};
          }
        });
        state.newUpdateObject = {};
        return state;   
    case REMOVE_PRODUCT:
        let resultRemove = {...action.removedProduct};
        state.newRemovedObject = {...resultRemove};
        state.products.forEach((product, index) => {
            if(state.newRemovedObject.id === product.id){
                state.products.splice(index,1);
            }
        })
        state.removedProduct = {};
        return state;
    default:
        return state;
  }
};

export const addProductActionCreator = () => {
    return {
      type: ADD_PRODUCT
    };
  };
  
export const updateProductActionCreator = (data) => {
    return {
      type: UPDATE_NEW_PRODUCT,
      newProduct: data
   }
  };

export const removeProductActionCreator = (data) => {
    return {
        type: REMOVE_PRODUCT,
        removedProduct: data
    }
}


export default productPagesReducer;
