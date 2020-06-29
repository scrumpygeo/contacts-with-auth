import {
  CREATE_CONTACT,
  FETCH_CONTACTS,
  FETCH_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CONTACT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_CONTACT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_CONTACT:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
