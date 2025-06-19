import axios from "axios";

// const baseUrl = "http://localhost:5000/api";
const baseUrl =
  "https://blogplatform-backend-bitwrap.vercel.app/api";

// get all blogs (published)
export const getBlogs = () => axios.get(`${baseUrl}/blogs/published`);

// get blog by slug
export const getBlogBySlug = (slug) =>
  axios.get(`${baseUrl}/blogs/slug/${slug}`);
