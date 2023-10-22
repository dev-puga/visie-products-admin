import axios from 'axios';

 export const dummyApi = axios.create({
  baseURL: import.meta.env.VITE_DUMMY_API_URL
});

