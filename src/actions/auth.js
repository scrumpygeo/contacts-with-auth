import contacts from "../apis/contacts";
import { setAlert } from "../actions/alert";
import history from "../history";
import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_USER,
  USER_LOADED,
  AUTH_ERROR,
} from "./types";
import setAuthToken from "../utils/setAuthToken";

// Load User - to check if logged in
export const loadUser = () => async (dispatch) => {
  if (localStorage.authentication_token && localStorage.email) {
    setAuthToken(localStorage.authentication_token, localStorage.email);
  }
  try {
    const res = await axios.get("http://localhost:5000/v1/sessions");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register
export const register = (registerValues, headers) => async (dispatch) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await contacts.post("/users", registerValues, headers);

    // console.log("response: ", response.data.data.user); // auth_token, email, id
    dispatch({ type: REGISTER_SUCCESS, payload: response.data.data.user });
    history.push("/");
  } catch (err) {
    dispatch(setAlert("There was an error", "danger"));

    dispatch({ type: REGISTER_FAIL });
  }
};

// login
export const login = (body, headers) => async (dispatch) => {
  const response = await contacts.post("/sessions", body, headers);
  // const status = response.status;

  // if status 401 return to login with error incorrect credentials

  dispatch({ type: LOGIN_USER, payload: response.data.data.user });
};
