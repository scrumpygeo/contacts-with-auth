import contacts from '../apis/contacts';
import history from '../history';
import {
  CREATE_CONTACT,
  FETCH_CONTACTS,
  FETCH_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
} from './types';

export const createContact = (formValues) => async (dispatch) => {
  const response = await contacts.post('/contacts', formValues);

  dispatch({ type: CREATE_CONTACT, payload: response.data });
  history.push('/');
};

export const fetchContacts = () => async (dispatch) => {
  const response = await contacts.get('/contacts');
  dispatch({ type: FETCH_CONTACTS, payload: response.data });
};

export const fetchContact = (id) => async (dispatch) => {
  const response = await contacts.get(`/contacts/${id}`);

  dispatch({ type: FETCH_CONTACT, payload: response.data });
};

export const editContact = (id, formValues) => async (dispatch) => {
  const response = await contacts.patch(`/contacts/${id}`, formValues);

  dispatch({ type: EDIT_CONTACT, payload: response.data });
  history.push('/');
};

export const deleteContact = (id) => async (dispatch) => {
  await contacts.delete(`/contacts/${id}`);

  dispatch({ type: DELETE_CONTACT, payload: id });
  history.push('/');
};
