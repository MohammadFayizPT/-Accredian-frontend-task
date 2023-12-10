import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000,
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY_OR_TOKEN_HERE',
        'Content-Type': 'application/json',
    }
  });

  export default instance;