import contacts from "../apis/contacts";
import { setAlert } from "../actions/alert";
import history from "../history";
// import axios from "axios";
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

// Load User - to check if logged in
export const loadUser = () => async (dispatch) => {
  try {
    if (localStorage.authentication_token && localStorage.email) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "X-User-Token": localStorage.authentication_token,
          "X-User-Email": localStorage.email,
        },
      };

      await contacts.get("/sessions", config);

      dispatch({
        type: USER_LOADED,
      });
    }
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register
export const register = (body) => async (dispatch) => {
  try {
    const response = await contacts.post("/users", body);

    dispatch({ type: REGISTER_SUCCESS, payload: response.data.data.user });
    history.push("/contactlist");
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
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await contacts.post("/sessions", body, config);

    dispatch({ type: LOGIN_SUCCESS, payload: response.data.data.user });
    history.push("/contactlist");
  } catch (err) {
    const errors = err.response;
    if (errors) {
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
