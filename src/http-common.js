import axios from "axios";

export default axios.create({
  baseURL: "https://mti-saw211.herokuapp.com/",
  headers: {
    "Content-type": "application/json"
  }
});
