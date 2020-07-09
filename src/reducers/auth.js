import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

const initialState = {
  authentication_token: localStorage.getItem("authentication_token"),
  email: localStorage.getItem("email"),
  isAuthenticated: null,
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        // user: action.payload,
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem(
        "authentication_token",
        action.payload.authentication_token
      ); // put returned item in local storage
      localStorage.setItem("email", action.payload.email);

      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("authentication_token");
      localStorage.removeItem("email");
      return {
        ...state,
        authentication_token: null, // put token value in state to null (above just removed it from local storage)
        email: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};
