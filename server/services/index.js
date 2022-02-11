import axios from 'axios';
import puppeteer from 'puppeteer';
import path from 'path';

const __dirname = path.resolve();
const filePath = path.join(__dirname, '/images');

const Services = {};

Services.getData = async () => {
	try {
		return await axios({
			method: 'GET',
			url: `https://codequiz.azurewebsites.net/data`,
		}).then(async (res) => {
			console.log('res get data: ' + JSON.stringify(res.data));
			return res.data;
		});
	} catch (err) {
        console.log("error res get data: " + JSON.stringify(err.response.data))
		throw err.response.data;
	}
};

Services.getCategory = async () => {
	try {
		return await axios({
			method: 'GET',
			url: `https://api.publicapis.org/categories`,
		}).then(async (res) => {
			console.log('res get category: ' + JSON.stringify(res.data));
			return res.data;
		});
	} catch (err) {
        console.log("error res get category: " + JSON.stringify(err.response.data))
		throw err.response.data;
	}
};

Services.getDataS2Q3 = async () => {
	try {
		return await axios({
			method: 'GET',
			url: `https://codequiz.azurewebsites.net`,
		}).then(async (res) => {
			console.log('res get data s2 q3: ' + JSON.stringify(res.data));
			let html = res.data;
			return html;
		});
	} catch (err) {
        console.log("error res data s2 q3: " + JSON.stringify(err.response.data))
		throw err.response.data;
	}
};

Services.scrape = async () => {
	const browser = await puppeteer.launch({ args: ['–no-sandbox', '–disable-setuid-sandbox'] })
	const page = await browser.newPage()
 
	await page.goto('https://codequiz.azurewebsites.net');
	await page.click('input');
	await page.waitFor(1000);
	await page.screenshot({ path: filePath + '/image.png' });	

	browser.close()
}

export default Services;