import firebaseDb from '../firebase';

const ADD_PERSON = 'ADD-PERSON';
const REMOVE_USER = 'REMOVE-USER';

const REMOVE_REQUEST = 'REMOVE-REQUEST';
const SET_USERS = 'SET-USERS';
const SET_PROFILES = 'SET-PROFILES';

let initialState = {
   clients: [
      {
        id: 1,
        firstName: "Mark",
        secondName: "Otto",
        username: "@mdo",
        mail: "markotto@gmail.com",
        request: "False",
        password: "12345",
        urlPhoto:
          "https://sun9-11.userapi.com/impg/kmBJYJ5uzeAzzFzjzsKNPk-_-XVrImJWvS0ILw/4c_igfiEqMI.jpg?size=512x512&quality=96&proxy=1&sign=093166373fa3195e88d2f44ed114afcf",
      },
      {
        id: 2,
        firstName: "Jacob",
        secondName: "Thornton",
        username: "@fat",
        mail: "jacobth@gmail.com",
        request: "False",
        password: "12345",
        urlPhoto:
          "https://sun9-11.userapi.com/impg/kmBJYJ5uzeAzzFzjzsKNPk-_-XVrImJWvS0ILw/4c_igfiEqMI.jpg?size=512x512&quality=96&proxy=1&sign=093166373fa3195e88d2f44ed114afcf",
      },
      {
        id: 3,
        firstName: "Larry",
        secondName: "Bird",
        username: "@twitter",
        mail: "larrybird@gmail.com",
        request: "False",
        password: "12345",
        urlPhoto:
          "https://sun9-11.userapi.com/impg/kmBJYJ5uzeAzzFzjzsKNPk-_-XVrImJWvS0ILw/4c_igfiEqMI.jpg?size=512x512&quality=96&proxy=1&sign=093166373fa3195e88d2f44ed114afcf",
      }, 
    ],
  };

const clientsPageReducer = (state = initialState, action) => {
    
  let stateCopy;
  switch(action.type){
    case ADD_PERSON:{
     stateCopy = {
        ...state,
        clients: [...state.clients, action.newPerson],
      };
       // stateCopy.clients = [...stateCopy.clients, action.newPerson];
   /*   firebaseDb.child('clients').push(
         action.newPerson,
         err => {
           if(err){
             console.log('error')
           }
         }
       )*/
        return stateCopy;
    }
    case REMOVE_USER:{
      stateCopy = {
        ...state,
        clients: [...state.clients],
      }
         stateCopy.clients.forEach((user, index) => {
           if(action.removeUserId === user.id){
             stateCopy.clients.splice(index,1);
           }
         })
        return stateCopy;
    }
      case REMOVE_REQUEST:{
        let stateCopy = {...state,
       clients: state.clients.map((client) => {
          if(action.personRequestId === client.id){
            return {...client, request: 'True'};
          }
          return client
       })
      };

        return stateCopy;
      }
      case SET_USERS:
        //return {...state, clients: [ ...action.clients]}  
        return {...state, clients: [ ...state.clients,...action.clients]};
      case SET_PROFILES:
        debugger;
         return {...state, clients:[...state.clients,...action.profiles]};
    default:
        return state;
      
  }
};

export const addPerson = (data) => {
    return {
      type: ADD_PERSON,
      newPerson: data
    }
  };

export const removeUser = (data) => {
    return {
      type: REMOVE_USER,
      removeUserId: data
    }
  }

export const removeRequest = (id) => {
  return {
      type: REMOVE_REQUEST,
      personRequestId: id
  }
}

export const setUsers = (clients) => ({type: SET_USERS, clients})
export const setProfiles = (profiles) => ({type: SET_PROFILES, profiles})
export default clientsPageReducer;
