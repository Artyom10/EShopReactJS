let initialState = {
  authError: null
};

const profileReducer = (state = initialState, action) => {
  switch(action.type){
    case 'UPDATE_PROFILE' :
      console.log('update profile');
      return {
        ...state,
      }
    case 'UPDATE_PROFILE_ERROR':
        console.log('update profile error');
        return {
          ...state,
        }
    default: 
    return state;
  }
};


export default profileReducer;