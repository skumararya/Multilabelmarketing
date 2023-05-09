import { axiosBaseURL } from "../apis/baseApi";

//all state
const fetchstates = async(url) => {
    const res = await axiosBaseURL.get(url);
    return res.data;
}

//all Cities
const fetchcities = async(url) => {
    const res = await axiosBaseURL.get(url);
    return res.data;
}

const otherServices =  {fetchstates, fetchcities} ;

export default otherServices ;