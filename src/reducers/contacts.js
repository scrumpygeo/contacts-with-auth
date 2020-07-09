import _ from "lodash";
import {
  CREATE_CONTACT,
  FETCH_CONTACTS,
  FETCH_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
  CLEAR_CONTACTS,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CONTACTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_CONTACT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_CONTACT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_CONTACT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_CONTACT:
      return _.omit(state, action.payload);
    case CLEAR_CONTACTS:
      // change this: just want to clear contacts now whole thing
      return (state = {});

    default:
      return state;
  }
};
