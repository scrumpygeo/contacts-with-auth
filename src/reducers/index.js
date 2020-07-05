import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import contacts from "./contacts";
import auth from "./auth";
import alert from "./alert";

export default combineReducers({
  form: formReducer,
  contacts,
  auth,
  alert,
});
