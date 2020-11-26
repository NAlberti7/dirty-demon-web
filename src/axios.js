import axios from "axios";

const test = "http://localhost:5000/api/v1";
const prod = "https://dirty-demon.herokuapp.com/api/v1";

export default axios.create({
  baseURL: prod,
});
