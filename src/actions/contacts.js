import contacts from "../apis/contacts";
import history from "../history";
// import setAuthToken from "../utils/setAuthToken";
import {
  CREATE_CONTACT,
  FETCH_CONTACTS,
  FETCH_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
} from "./types";

const setHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      "X-User-Token": localStorage.authentication_token,
      "X-User-Email": localStorage.email,
    },
  };
};

export const createContact = (formValues) => async (dispatch) => {
  try {
    if (localStorage.authentication_token && localStorage.email) {
      const config = setHeaders();
      const response = await contacts.post("/contacts", formValues, config);

      dispatch({ type: CREATE_CONTACT, payload: response.data.data.user });
      history.push("/");
    }
  } catch (err) {
    console.log(err);
  }
};

export const fetchContacts = () => async (dispatch) => {
  try {
    if (localStorage.authentication_token && localStorage.email) {
      const config = setHeaders();

      const response = await contacts.get("/contacts", config);

      dispatch({ type: FETCH_CONTACTS, payload: response.data.data });
    }
  } catch (err) {
    console.log("Fetch Contacts", err);
  }
};

export const fetchContact = (id) => async (dispatch) => {
  try {
    if (localStorage.authentication_token && localStorage.email) {
      const config = setHeaders();

      const response = await contacts.get(`/contacts/${id}`, config);

      dispatch({ type: FETCH_CONTACT, payload: response.data.data });
    }
  } catch (err) {
    console.log("Error; ", err);
  }
};

export const editContact = (id, formValues) => async (dispatch) => {
  if (localStorage.authentication_token && localStorage.email) {
    const config = setHeaders();
    const response = await contacts.patch(
      `/contacts/${id}`,
      formValues,
      config
    );
    dispatch({ type: EDIT_CONTACT, payload: response.data });
    history.push("/");
  }
};

export const deleteContact = (id) => async (dispatch) => {
  if (localStorage.authentication_token && localStorage.email) {
    // setAuthToken(localStorage.authentication_token, localStorage.email);
    const config = setHeaders();
    await contacts.delete(`/contacts/${id}`, config);

    dispatch({ type: DELETE_CONTACT, payload: id });
    history.push("/");
  }
};
