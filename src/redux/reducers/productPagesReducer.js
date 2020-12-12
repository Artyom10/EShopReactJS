

//const ADD_PRODUCT = 'ADD-PRODUCT';
const UPDATE_NEW_PRODUCT = 'UPDATE-NEW-PRODUCT';
//const REMOVE_PRODUCT = 'REMOVE-PRODUCT';
//const EDIT_PRODUCT = 'EDIT-PRODUCT';
const CONSTANTLY_UPDATE_PRODUCT = 'CONSTANTLY-UPDATE-PRODUCT';
const SET_PRODUCTS = 'SET-PRODUCTS';
const GET_CERTAIN_CLOTHES = 'GET-CERTAIN-CLOTHES';

let initialState = {
  newPhoto: '',
  newPrice: '',
  newProducer: '',
  newType: '',
  newSizes: '',
  newDescription: '',
  newTags: '',
  newId: '',
    products: [
    {
      id: 1,
      urlPhoto:
        "https://sun9-75.userapi.com/impg/v9-83eUNEQ5s5JdHfLDdcFXVoSdZ8CvseVH3Tw/JAxl7sVkPs4.jpg?size=762x1100&quality=96&proxy=1&sign=524d2c12b64f491a17abd599fa4318f7",
      price: "50",
      producer: "Mango",
      type: "Jacket",
      sizes: "XS,S,M,L",
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
      tags: "#mango, #pants",
    },
    ],
    productsCertainType: [

    ],
    newProductObject: {

    },
    newUpdateObject: {

    },
    newRemovedObject: {
      
    },
    changedProductObject: {

    },
    productError: null
  };

/*const productPagesReducer = (state = initialState, action) => {
  let stateCopy;
  switch(action.type){

    case ADD_PRODUCT:{
      /*const newProduct = {
        id: state.newId,
        urlPhoto: state.newPhoto,
        price: state.newPrice,
        producer: state.newProducer,
        type: state.newType,
        sizes: state.newSizes,
        description: state.newDescription,
        tags: state.newTags
     }*/
   /* let stateCopy = {
        ...state,
        products: [...state.products, newProduct],*/
        
      
     /* firebaseDb.database().ref().child('products').push(
        newProduct,
        err => {
          if(err){
            console.log('error')
          }
        }
      )*/
   /*     return stateCopy;
    }
    
    case UPDATE_NEW_PRODUCT:
       switch(action.from){
         case 'id':
         return {
           ...state,
          newId: action.newText
         }
         case 'urlPhoto':
           return {
           ...state,
          newPhoto: action.newText }
          case 'price':
           return {
           ...state,
          newPrice: action.newText }
          case 'producer':
           return {
           ...state,
          newProducer: action.newText }
          case 'type':
           return {
           ...state,
          newType: action.newText }
          case 'sizes':
           return {
           ...state,
          newSizes: action.newText }
          case 'description':
           return {
           ...state,
          newDescription: action.newText }
          case 'tags':
           return {
           ...state,
          newTags: action.newText }
        default:
          return stateCopy;
       }
        /*
    case CONSTANTLY_UPDATE_PRODUCT:
      debugger;
      state.changedProductObject = {...action.updatedProduct};
        return state;
    case EDIT_PRODUCT:
        return {...state};
        */
 /*   case REMOVE_PRODUCT:{
      let stateCopy = {
         ...state,
         products: [...state.products]
       }
        let resultRemoveId = action.removedProductId;
        stateCopy.products.forEach((product, index) => {
            if(resultRemoveId === product.id){
                stateCopy.products.splice(index,1);
            }
        })
        return stateCopy;
      }
      

      case SET_PRODUCTS:
        return {...state, products: [ ...state.products,...action.products]};

      case GET_CERTAIN_CLOTHES:
        let stateCopy = {
          ...state,
          product: [...state.products],
          productsCertainType : [...state.productsCertainType]
        }
        stateCopy.products = stateCopy.products.filter((product) => product.type === action.typeProducts);
    return stateCopy;
    
    default:
        return state;
  }
};*/

const ADD_PRODUCT = 'ADD_PRODUCT';
const ADD_PRODUCT_ERROR = 'ADD_PRODUCT_ERROR';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const REMOVE_PRODUCT_ERROR = 'REMOVE_PRODUCT_ERROR';
const EDIT_PRODUCT = 'EDIT_PRODUCT';
const UPDATE_BOUGHT_PRODUCT_STATUS = 'UPDATE_BOUGHT_PRODUCT_STATUS';
const UPDATE_BOUGHT_PRODUCT_STATUS_ERROR = 'UPDATE_BOUGHT_PRODUCT_STATUS_ERROR';
const ADD_TO_BOUGHT = 'ADD_TO_BOUGHT';
const ADD_TO_BOUGHT_ERROR = 'ADD_TO_BOUGHT_ERROR';

const productPagesReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_PRODUCT:
         console.log('add product', action.newProduct)
        return  state;
    case ADD_PRODUCT_ERROR:
         console.log('add product error', action.err);
         return state;
    case REMOVE_PRODUCT:
        console.log('remove product', action.targetDeleteProduct)
        return state;
    case REMOVE_PRODUCT_ERROR:
        console.log('remove product error', action.err.message);
        return state;
    case EDIT_PRODUCT:
        console.log('edit product', action.targetEditProduct)
        return state;
    case UPDATE_BOUGHT_PRODUCT_STATUS:
        console.log('product update its status to BOUGHT');
        return state;
    case UPDATE_BOUGHT_PRODUCT_STATUS_ERROR:
        console.log('product update its status to BOUGHT WITH ERROR');
        return state;
    case ADD_TO_BOUGHT:
           console.log('product sold out', action.targetProductBuy)
           return {
             ...state,
             productError: null
           }
    case ADD_TO_BOUGHT_ERROR:
          console.log('product sold out WITH ERROR')
          return {
            ...state,
            productError: action.err.message
          }
    default:
        return state;
  }
};



export const editProductAdmin = (data) => {
  return {
    type: EDIT_PRODUCT,
  }
}

export const changeProduct = (data) => {
  return {
    type: CONSTANTLY_UPDATE_PRODUCT,
    updatedProduct: data
  }
}

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products: products

  }
}

export const showCertainProducts = (typeProducts) => {
  return {
    type: GET_CERTAIN_CLOTHES,
    typeProducts: typeProducts,
  }
}

export default productPagesReducer;
