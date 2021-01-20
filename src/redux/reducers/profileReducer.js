import produce from "immer";

const UPDATE_PROFILE = "UPDATE_PROFILE";
const UPDATE_PROFILE_ERROR = "UPDATE_PROFILE_ERROR";
const UPDATE_PROFILE_REQUEST = "UPDATE_PROFILE_REQUEST";
const UPDATE_PROFILE_REQUEST_ERROR = "UPDATE_PROFILE_REQUEST_ERROR";

const initialState = {
  authError: null,
};

const profileReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case UPDATE_PROFILE:
        console.log("update profile");
        return draft;
      case UPDATE_PROFILE_ERROR:
        console.log("update profile error");
        return draft;
      case UPDATE_PROFILE_REQUEST:
        console.log("request has been sent");
        return draft;
      case UPDATE_PROFILE_REQUEST_ERROR:
        console.log("error while sending request");
        return draft;
      default:
        return state;
    }
  });
};

export default profileReducer;
