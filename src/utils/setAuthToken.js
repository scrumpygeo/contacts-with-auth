// function that takes in a token. If token exists it adds it to the headers else it deletes it
// - add global header to axios
import axios from "axios";

const setAuthToken = (authentication_token, email) => {
  if (authentication_token && email) {
    axios.defaults.headers.common["X-User-Token"] = authentication_token;
    axios.defaults.headers.common["X-User-Email"] = email;
  } else {
    delete axios.defaults.headers.common["X-User-Token"];
    delete axios.defaults.headers.common["X-User-email"];
  }
};

export default setAuthToken;
