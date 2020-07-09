import axios from "axios";

axios.defaults.headers.common["Content-Type"] = "application/json";
delete axios.defaults.headers.common["X-User-Token"];
delete axios.defaults.headers.common["X-User-email"];
console.log("Authorize/Headers: ", axios.defaults.headers);

export default axios.create({
  baseURL: "http://localhost:5000/v1",
});
