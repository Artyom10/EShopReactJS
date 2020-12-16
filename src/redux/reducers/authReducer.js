const LOGIN_ERROR = 'LOGIN_ERROR';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_ERROR = 'SIGNUP_ERROR';


const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case LOGIN_ERROR:
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }
    case LOGIN_SUCCESS:
        console.log('login success');
        return {
          ...state,
          authError: null
        }
    case SIGNOUT_SUCCESS:
      console.log('signout success');
      return state;
    case SIGNUP_SUCCESS:
      console.log('signup success');
      return {
        ...state,
        authError: null
      }
    case SIGNUP_ERROR:
      debugger;
      console.log('signup error',);
      return {
        ...state,
        authError: action.err.message
      }
    default: 
    return state;
  }
};


export default authReducer;