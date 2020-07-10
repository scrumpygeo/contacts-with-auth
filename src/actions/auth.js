import contacts from "../apis/contacts";
import { setAlert } from "../actions/alert";
import history from "../history";
// import axios from "axios";
import authorize from "../apis/authorize";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  CLEAR_CONTACTS,
} from "./types";
import setAuthToken from "../utils/setAuthToken";

// Load User - to check if logged in
export const loadUser = () => async (dispatch) => {
  if (localStorage.authentication_token && localStorage.email) {
    setAuthToken(localStorage.authentication_token, localStorage.email);
  }
  try {
    await contacts.get("http://localhost:5000/v1/sessions");

    dispatch({
      type: USER_LOADED,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register
export const register = (registerValues) => async (dispatch) => {
  try {
    const response = await authorize.post("/users", registerValues);

    dispatch({ type: REGISTER_SUCCESS, payload: response.data.data.user });
    history.push("/dashboard");
  } catch (err) {
    const errors = err.response;

    if (errors.status === 422) {
      dispatch(setAlert(`Email taken. Try another one`, "danger"));
    } else {
      dispatch(setAlert(errors.statusText, "danger"));
    }

    dispatch({ type: REGISTER_FAIL });
  }
};

// login
export const login = (body) => async (dispatch) => {
  try {
    const response = await authorize.post("/sessions", body);

    dispatch({ type: LOGIN_SUCCESS, payload: response.data.data.user });
  } catch (err) {
    const errors = err.response;
    if (errors.status === 401) {
      dispatch(
        setAlert(`${errors.statusText}: incorrect email or password.`, "danger")
      );
    } else {
      dispatch(setAlert(errors.statusText, "danger"));
    }

    dispatch({ type: LOGIN_FAIL });
  }
};

// Logout
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_CONTACTS });
  dispatch({ type: LOGOUT });
};
