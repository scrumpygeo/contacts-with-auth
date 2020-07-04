import contacts from "../apis/contacts";
import history from "../history";
import { REGISTER_SUCCESS, LOGIN_USER } from "./types";

// Register
export const register = (registerValues) => async (dispatch) => {
  const response = await contacts.post("/users", registerValues);
  console.log("registation:", response);

  dispatch({ type: REGISTER_SUCCESS, payload: response.data.data.user });
  history.push("/");
};

// login
export const loginUser = (body, headers) => async (dispatch) => {
  const response = await contacts.post("/sessions", body, headers);
  const status = response.status;
  console.log(status);
  console.log("login Response:", response.data.data.user); // reponse with email and token
  dispatch({ type: LOGIN_USER, payload: response.data.data.user });
};
