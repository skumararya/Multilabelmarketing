import { axiosBaseURL } from "../apis/baseApi";

// fetch Employee List
const fetchemployeelist = async (url) => {
    const response = await axiosBaseURL.get(url); 
    return response.data;
  };
// add Employee List
const addemployeelist = async (url, empmodal) => {
  const response = await axiosBaseURL.post(url , empmodal); 
  return response.data;
};
// delete Employee List
const deletemployeelist = async (url) => {
  const response = await axiosBaseURL.delete(url); 
  return response.data;
};

  const servicesemployee = {
    fetchemployeelist, addemployeelist, deletemployeelist
  };
  
  export default servicesemployee; 