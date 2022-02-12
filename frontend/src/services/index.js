import axiosInstance from "../api/axiosIntance";
import { API } from '../config/api/index';

const Services = {};

Services.getDataQ1 = async () => {
	try {
		return await axiosInstance
			.get(`${API.getQ1}`)
			.then(async function (res) {
				console.log('res get data q1: ' + JSON.stringify(res.data));
				return res.data;
			});
	} catch (err) {
		console.log('error res get data q1: ' + err);
		throw err;
	}
};

Services.getCategory = async () => {
	try {
		return await axiosInstance
			.get(`${API.getCategory}`)
			.then(async function (res) {
				console.log('res get category: ' + JSON.stringify(res.data));
				return res.data;
			});
	} catch (err) {
		console.log('error res get category: ' + err);
		throw err;
	}
};

Services.getDataS2Q3 = async () => {
	try {
		return await axiosInstance
			.get(`${API.getS2Q3}`)
			.then(async function (res) {
				console.log('res get s2 q3: ' + JSON.stringify(res.data));
				return res.data;
			});
	} catch (err) {
		console.log('error res s2 q3: ' + err);
		throw err;
	}
};

export default Services;