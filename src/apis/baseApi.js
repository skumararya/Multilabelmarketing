import axios from "axios";

export const axiosBaseURL = axios.create({
  baseURL: "http://bpmss.co.in/api/",
 
});
