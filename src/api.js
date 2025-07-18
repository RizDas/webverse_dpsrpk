import axios from 'axios';

const API = axios.create({
  baseURL: 'https://webverse-qy6i.onrender.com',  
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function signup(username, password) {
  const res = await API.post('/auth/signup', { username, password });
  console.log(res.data);
  return res.data;
}

export async function login(username, password) {
  const res = await API.post('/auth/login', { username, password });
  const { access_token } = res.data;
  localStorage.setItem('access_token', access_token);
  return res.data;
}

export async function fetchProfile() {
  const res = await API.get('/users/profile');
  console.log(res.data);
  return res.data;
}

export async function getOrders() {
  const res = await API.get('/orders/');
  console.log(res.data);
  return res.data;
}

export async function submitReview(reviewData) {
  const res = await API.post('/reviews/', reviewData);
  console.log(res.data);
  return res.data;
}

export default API;
