

const ADD_PERSON = 'ADD-PERSON';
const REMOVE_USER = 'REMOVE-USER';

const REMOVE_REQUEST = 'REMOVE-REQUEST';

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
    newClientObject: {

    },
    removedUser: {

    },
  };

const clientsPageReducer = (state = initialState, action) => {
    
  let stateCopy;
  switch(action.type){
    case ADD_PERSON:{
     stateCopy = {
        ...state,
        newClientObject: {...action.newPerson},
        clients: [...state.clients],
      };
        stateCopy.clients = [...stateCopy.clients, stateCopy.newClientObject];
        return stateCopy;
    }
    case REMOVE_USER:{
      stateCopy = {
        ...state,
        clients: [...state.clients],
      }
        let userId = action.removeUserId
        
         stateCopy.clients.forEach((user, index) => {
           if(userId === user.id){
             stateCopy.clients.splice(index,1);
           }
         })
        return stateCopy;
    }
      case REMOVE_REQUEST:{
        let stateCopy = {...state};
        stateCopy.clients = [...state.clients];
        let person = {...action.personRequest}; //Поменять remove request на True 
        stateCopy.clients.forEach((client, index) => {
          if(person.id === client.id){
            client.request = 'True';
          }
        })
        return stateCopy;
      }
    default:
        return state;
      
  }
};

export const addPersonActionCreator = (data) => {
    return {
      type: ADD_PERSON,
      newPerson: data
    }
  };

export const removeUserActionCreator = (data) => {
    return {
      type: REMOVE_USER,
      removeUserId: data
    }
  }

export const removeRequestActionCreator = (data) => {
  return {
      type: REMOVE_REQUEST,
      personRequest: data
  }
}

export default clientsPageReducer;
