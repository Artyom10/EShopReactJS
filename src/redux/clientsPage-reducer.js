const ADD_PERSON = 'ADD-PERSON';
const REMOVE_USER = 'REMOVE-USER';

const clientsPageReducer = (state, action) => {
    
      
  switch(action.type){
    case ADD_PERSON:
        state.newClientObject = {...action.newPerson};
        const result = {...state.newClientObject};
        state.clients.push(result);
        state.newClientObject = {};
        return state;
    case REMOVE_USER:
        let user = {...action.removeUser};
         state.removedUser = {...user};
         state.clients.forEach((user, index) => {
           if(state.removedUser.id === user.id){
             state.clients.splice(index,1);
           }
         })
         state.removedUser = {};
        return state;
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
      removeUser: data
    }
  }

export default clientsPageReducer;
