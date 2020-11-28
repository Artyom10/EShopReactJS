const ADD_TO_BAG = 'ADD-TO-BAG'
const REMOVE_FROM_BAG = 'REMOVE-FROM-BAG';

const bagPageReducer = (state, action) => {
    switch(action.type){
        case ADD_TO_BAG:
            state.newBagObject = {...action.newBagProduct}; //Добавляем в state добавленный обьект из UI 
            const result = {...state.newBagObject};
            state.bags.push(result);
            state.newBagObject = {};
            return state;
        case REMOVE_FROM_BAG:
            let remove = {...action.removeTarget};
            state.newBagDeletedObject = {...remove};
            state.bags.forEach((bagProduct, index) => {
             if(state.newBagDeletedObject.id === bagProduct.id){
               state.bags.splice(index,1);
            }
 
           })
           state.newBagDeletedObject = {};
            return state;
        default:
            return state;
    }
    
};

export const addToBagActionCreator = (data) => {
    return {
      type: ADD_TO_BAG,
      newBagProduct: data
    }
  }
  
  export const removeTargetActionCreator = (data) => {
    return {
      type: REMOVE_FROM_BAG,
      removeTarget: data
    }
  }

export default bagPageReducer;
