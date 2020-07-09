import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

if (localStorage.authentication_token && localStorage.email) {
  setAuthToken(localStorage.authentication_token, localStorage.email);
}
console.log("apis/contacts/Headers: ", axios.defaults.headers.common);

export default axios.create({
  baseURL: "http://localhost:5000/v1",
});
