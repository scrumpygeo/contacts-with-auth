import contacts from '../apis/contacts';

export const createContact = (formValues) => async (dispatch) => {
  contacts.post('/contacts', formValues);
};
