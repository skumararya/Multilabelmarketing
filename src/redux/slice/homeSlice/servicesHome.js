import { axiosBaseURL } from "../../../apis/dharmaApi";

// fetch banners
const fetchBanners = async (url) => {
  const response = await axiosBaseURL.get(url);
  return response.data;
};

// fetch gallery
const fetchGallery = async (url) => {
  const response = await axiosBaseURL.get(url);
  return response.data;
};

// fetch menus
const fetchMenus = async (url) => {
  const response = await axiosBaseURL.get(url);
  return response.data;
};
// fetch gallery
const fetchPageData = async (url) => {
  const response = await axiosBaseURL.get(url);
  return response.data;
};

const servicesHome = {
  fetchBanners,
  fetchGallery,
  fetchMenus,
  fetchPageData,
};

export default servicesHome;
