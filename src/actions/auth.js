import contacts from "../apis/contacts";
import { setAlert } from "../actions/alert";
import history from "../history";
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_USER } from "./types";

// Register
export const register = (registerValues, headers) => async (dispatch) => {
  try {
    const response = await contacts.post("/users", registerValues, headers);

    // console.log("response: ", response.data.data.user.authentication_token);
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
