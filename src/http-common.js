import axios from "axios";

export default axios.create({
  baseURL: "https://back-beta-ruddy.vercel.app/api",
  headers: {
    "Content-type": "application/json"
  }
});
