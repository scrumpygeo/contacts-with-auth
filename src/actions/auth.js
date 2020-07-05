import contacts from "../apis/contacts";
import { setAlert } from "../actions/alert";
import history from "../history";
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_USER } from "./types";

// Load User - to check if logged in
export const loadUser = () => async (dispatch) => {
  try {
  } catch (err) {
    console.log(err.msg);
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
