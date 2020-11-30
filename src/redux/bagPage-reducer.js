const ADD_TO_BAG = 'ADD-TO-BAG'
const REMOVE_FROM_BAG = 'REMOVE-FROM-BAG';

let initialState = {
    bags: [
      {
        id: 1,
        urlPhoto:
          "https://sun9-75.userapi.com/impg/v9-83eUNEQ5s5JdHfLDdcFXVoSdZ8CvseVH3Tw/JAxl7sVkPs4.jpg?size=762x1100&quality=96&proxy=1&sign=524d2c12b64f491a17abd599fa4318f7",
        price: 50,
        producer: "Mango",
        type: "Jacket",
        sizes: "XS,S,M,L",
        description: "Something",
        tags: "#mango, #jacket, #streetware",
      },

      {
        id: 2,
        urlPhoto:
          "https://sun9-52.userapi.com/impg/xWd_NaCKK7vVjAIBP0dTekN36nsRI9kidnelOw/V7IfJ1kIGO8.jpg?size=762x1100&quality=96&proxy=1&sign=ec477ba05df76b5c6a800f2f0b3ebeee",
        price: 47,
        producer: "Mango",
        type: "Pants",
        sizes: "M,L,XL",
        description: "Something",
        tags: "#mango, #pants",
      },
    ],
    newBagObject: {

    },
    newBagDeletedObject: {

    },
  };

const bagPageReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_BAG:
            state.newBagObject = {...action.newBagProduct}; //Добавляем в state добавленный обьект из UI 
            const result = {...state.newBagObject};
            state.bags.push(result);
            state.newBagObject = {};
            return state;
        case REMOVE_FROM_BAG:
            let remove = action.removeTargetId;
            state.bags.forEach((bagProduct, index) => {
             if(remove === bagProduct.id){
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
      removeTargetId: data
    }
  }

export default bagPageReducer;
