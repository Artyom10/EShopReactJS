const ADD_PRODUCT = 'ADD-PRODUCT';
const UPDATE_NEW_PRODUCT = 'UPDATE-NEW-PRODUCT';
const REMOVE_PRODUCT = 'REMOVE-PRODUCT';
const EDIT_PRODUCT = 'EDIT-PRODUCT';
const CONSTANTLY_UPDATE_PRODUCT = 'CONSTANTLY-UPDATE-PRODUCT';

let initialState = {
    products: [
    {
      id: 1,
      urlPhoto:
        "https://sun9-75.userapi.com/impg/v9-83eUNEQ5s5JdHfLDdcFXVoSdZ8CvseVH3Tw/JAxl7sVkPs4.jpg?size=762x1100&quality=96&proxy=1&sign=524d2c12b64f491a17abd599fa4318f7",
      price: "50",
      producer: "Mango",
      type: "Jacket",
      sizes: "XS,S,M,L",
      description: "Something",
      tags: "#mango, #jacket, #streetware",
    },
    {
      id: 2,
      urlPhoto:
        "https://sun9-68.userapi.com/impg/BHwQV6ItiqEBIU0jgzXb4LpWm4R_8639f7WF9g/tBB8NyRwMhE.jpg?size=1496x2160&quality=96&proxy=1&sign=17b1b3045f69aab4a771d0fb9e4511a4",
      price: "100",
      producer: "Carhartt",
      type: "Down jacket",
      sizes: "S,M,L",
      description: "Something",
      tags: "#carhartt, #jacket",
    },
    {
      id: 3,
      urlPhoto:
        "https://sun9-66.userapi.com/impg/VrtHC75OfFYYCa9JfkL-W7cORCkFEIhGKFbwBw/ym1NDhSC9fs.jpg?size=1496x2160&quality=96&proxy=1&sign=b908d4ad177c98974ad56576acfa6bf3",
      price: "35",
      producer: "Diesel",
      type: "Shirt",
      sizes: "S",
      description: "Something",
      tags: "#diesel, #shirt",
    },
    {
      id: 4,
      urlPhoto:
        "https://sun9-52.userapi.com/impg/kz7_A2GPc8s3WwGZDSkyNGgcWJactYgDYlQqug/WQpW-9mdTWU.jpg?size=600x866&quality=96&proxy=1&sign=bc15dc8d948e3c67970b3d255f2b19f6",
      price: "70",
      producer: "Mango",
      type: "Jacket",
      sizes: "XS,S,M,L",
      description: "Something",
      tags: "#mango, #jacket",
    },
    {
      id: 5,
      urlPhoto:
        "https://sun9-51.userapi.com/impg/mP-HyBe0hlpJkK8JLrjuDsvlfC5N897l38-cJQ/q656OVsD3Xk.jpg?size=600x866&quality=96&proxy=1&sign=2aa238d9da68b421b4aafb1f652d2b36",
      price: "70",
      producer: "Mango",
      type: "Coat",
      sizes: "M,L",
      description: "Something",
      tags: "#mango, #coat",
    },
    {
      id: 6,
      urlPhoto:
        "https://sun9-53.userapi.com/impg/rZO7uzY77jW4S1C_bZFjOEDbjO40s8bk-rgGRA/q3v79SyeC5I.jpg?size=600x866&quality=96&proxy=1&sign=1085920c0f91da8084a5005d9f1b18c0",
      price: "47",
      producer: "Mango",
      type: "Pants",
      sizes: "M,L,XL",
      description: "Something",
      tags: "#mango, #pants",
    },
    {
      id: 7,
      urlPhoto:
        "https://sun9-13.userapi.com/impg/6bJBE1DBLwKvFu8csRcfTtHkHHuMKZaQCOkMeg/QYXQybTR_Uo.jpg?size=1496x2160&quality=96&proxy=1&sign=33b12de91d790063bef8b9b6a52f0abe",
      price: "500",
      producer: "Diesel",
      type: "Coat",
      sizes: "XS,S,M",
      description: "Something",
      tags: "#diesel, #coat",
    },
    {
      id: 8,
      urlPhoto:
        "https://sun9-52.userapi.com/impg/xWd_NaCKK7vVjAIBP0dTekN36nsRI9kidnelOw/V7IfJ1kIGO8.jpg?size=762x1100&quality=96&proxy=1&sign=ec477ba05df76b5c6a800f2f0b3ebeee",
      price: "47",
      producer: "Mango",
      type: "Pants",
      sizes: "M,L,XL",
      description: "Something",
      tags: "#mango, #pants",
    },
    ],
    newProductObject: {

    },
    newUpdateObject: {

    },
    newRemovedObject: {
      
    },
    changedProductObject: {

    },
  };

const productPagesReducer = (state = initialState, action) => {

  switch(action.type){
    case ADD_PRODUCT:
        const result = { ...state.newProductObject };
        state.products.push(result);
        state.newProductObject = {};
        return state;
    case UPDATE_NEW_PRODUCT:
        state.newProductObject = { ...action.newProduct };
        return state;
    case CONSTANTLY_UPDATE_PRODUCT:
      debugger;
      state.changedProductObject = {...action.updatedProduct};


        return state;
    case EDIT_PRODUCT:
      //const recivedProduct = {...action.necessaryObject};
       debugger;
        const receivedProduct = {...state.changedProductObject};
        state.products.forEach((product,index) => {
          if(receivedProduct.id === product.id){
            product.price = receivedProduct.price;
            product.producer = receivedProduct.producer;
            product.type = receivedProduct.type;
            product.description = receivedProduct.description;
            product.tags = receivedProduct.tags;
            product.sizes = receivedProduct.sizes;
          }
        })
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
  
export const updateProductActionCreator = (data) => { //updateNewProduct
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

export const editProductActionCreator = (data) => {
  return {
    type: EDIT_PRODUCT,
   // necessaryObject: data
  }
}

export const updateProductInListActionCreator = (data) => {
  return {
    type: CONSTANTLY_UPDATE_PRODUCT,
    updatedProduct: data
  }
}


export default productPagesReducer;
