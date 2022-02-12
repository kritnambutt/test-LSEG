import axios from 'axios';
import { 
    BACKEND_HOST, 
} from '../config/api/index';

const backendHost = BACKEND_HOST;

const instance = axios.create({
	baseURL: backendHost,
	timeout: 30000,
});

instance.interceptors.request.use(async (config) => {
    return config;
}, function (error) {
    // Do something with request error
	// console.log("interceptors err.response.data: " + JSON.stringify(error.response.data))
    return Promise.reject(error);
});

instance.interceptors.response.use((res) => {
    return res;
  }, (err) => {
	return Promise.reject(err);
});

export default instance;