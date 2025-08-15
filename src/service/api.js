import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:7000/api/v1",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const registerUser = (formData) => API.post("/users/register", formData);
export const loginUser = (formData) => API.post("/users/login", formData);

export const restaurantData = () => API.get("/restaurants");
export const searchData = (query) =>
  API.get(`/restaurants/search?query=${query}`);

export const getAllOffers = () => API.get("/offers");
export const getAllOfferImages = () => API.get("/offerImages");

export const getCart = () => API.get("/cart");
export const addToCart = (item) => API.post("/cart", item);
export const removeFromCart = (productId) => API.delete(`/cart/${productId}`);

export default API;
