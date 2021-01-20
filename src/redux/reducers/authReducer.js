import produce from "immer";

const LOGIN_ERROR = "LOGIN_ERROR";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";
const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
const SIGNUP_ERROR = "SIGNUP_ERROR";

const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_ERROR:
        console.log("login error");
        draft.authError = "Login failed";
        return draft;
      case LOGIN_SUCCESS:
        console.log("login success");
        draft.authError = null;
        return draft;
      case SIGNOUT_SUCCESS:
        console.log("signout success");
        return draft;
      case SIGNUP_SUCCESS:
        console.log("signup success");
        draft.authError = null;
        return draft;
      case SIGNUP_ERROR:
        debugger;
        console.log("signup error");
        draft.authError = action.err.messge;
        return draft;
      default:
        return state;
    }
  });
};

export default authReducer;
