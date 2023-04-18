import axios from "axios";

export const axiosBaseURL = axios.create({
  baseURL: "http://164.52.202.110/dharma/api/v1/",
  headers: {
    "X-user": "zur1xjb4123ascvb",
  },
});
