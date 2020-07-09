import contacts from "../apis/contacts";
// import authorize from "../apis/authorize";
import history from "../history";
// import setAuthToken from "../utils/setAuthToken";
import {
  CREATE_CONTACT,
  FETCH_CONTACTS,
  FETCH_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
} from "./types";

export const createContact = (formValues) => async (dispatch) => {
  const response = await contacts.post("/contacts", formValues);

  console.log("create:", response.data.data.user);
  dispatch({ type: CREATE_CONTACT, payload: response.data.data.user });
  history.push("/");
};

export const fetchContacts = () => async (dispatch) => {
  try {
    if (localStorage.authentication_token && localStorage.email) {
      // setAuthToken(localStorage.authentication_token, localStorage.email);
      const config = {
        headers: {
          "Content-Type": "application/json",
          "X-User-Token": localStorage.authentication_token,
          "X-User-Email": localStorage.email,
        },
      };

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
      const config = {
        headers: {
          "Content-Type": "application/json",
          "X-User-Token": localStorage.authentication_token,
          "X-User-Email": localStorage.email,
        },
      };

      console.log("Fetch contact: ", config);
      const response = await contacts.get(`/contacts/${id}`, config);
      console.log("Success!!!");
      dispatch({ type: FETCH_CONTACT, payload: response.data.data });
    }
  } catch (err) {
    console.log("Error; ", err);
  }
};

export const editContact = (id, formValues) => async (dispatch) => {
  const response = await contacts.patch(`/contacts/${id}`, formValues);

  dispatch({ type: EDIT_CONTACT, payload: response.data.data });
  history.push("/");
};

export const deleteContact = (id) => async (dispatch) => {
  await contacts.delete(`/contacts/${id}`);

  dispatch({ type: DELETE_CONTACT, payload: id });
  history.push("/");
};
