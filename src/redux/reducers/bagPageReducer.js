

const ADD_TO_BAG = 'ADD-TO-BAG'
const REMOVE_FROM_BAG = 'REMOVE-FROM-BAG';
const SET_BAGS = 'SET-BAGS';

let initialState = {
     bagError: null
  };

const bagPageReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TO_BAG':
           console.log('add to bag product', action.targetAddToBag)
           return {
             ...state,
             bagError: null
           }
        case 'REMOVE_FROM_BAG':
         console.log('remove bag product');
         return {
           ...state,
           bagError: action.err.message
         }
        default:
            return state;
    }
    
};

/*export const addToBag = (data) => {
    return {
      type: ADD_TO_BAG,
      newBagProduct: data
    }
  }*/
  
  export const removeTarget = (data) => {
    return {
      type: REMOVE_FROM_BAG,
      removeTargetId: data
    }
  }

export const setBags = (data) => {
  return {
    type: SET_BAGS,
    bags: data
  }
}

export default bagPageReducer;
