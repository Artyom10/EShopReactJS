const UPDATE_PROFILE = 'UPDATE_PROFILE';
const UPDATE_PROFILE_ERROR = 'UPDATE_PROFILE_ERROR';
const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST';
const UPDATE_PROFILE_REQUEST_ERROR = 'UPDATE_PROFILE_REQUEST_ERROR';


const initialState = {
  authError: null
};

const profileReducer = (state = initialState, action) => {
  switch(action.type){
    case UPDATE_PROFILE :
      console.log('update profile');
      return {
        ...state,
      }
    case UPDATE_PROFILE_ERROR:
        console.log('update profile error');
        return {
          ...state,
        }
    case UPDATE_PROFILE_REQUEST:
      console.log('request has been sent');
      return {
        ...state
      }
    case UPDATE_PROFILE_REQUEST_ERROR:
      console.log('error while sending request');
      return {
        ...state
      }
    default: 
    return state;
  }
};


export default profileReducer;