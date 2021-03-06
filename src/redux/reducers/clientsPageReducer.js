import produce from 'immer'

const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const  GET_USERS_ERROR = 'GET_USERS_ERROR';

const initialState = {
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
  return produce(state, draft => {
    switch(action.type){
      case GET_USERS_SUCCESS:
        console.log('get users success');
        return draft;
      case GET_USERS_ERROR: 
      console.log('get users error');
        return draft;
      default:
        return state;
    }
  })
};


export default clientsPageReducer;
