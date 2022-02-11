// import { fetchFrame } from "node-iframe";
import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import { resultQ1 } from '../services/Q1/index.js';
import Services from '../services/index.js';

class Controller {
    static getDataQ1 = async (req, res, next) => {
        const result = await resultQ1();
		return res.status(200).send({ data: result });
    }

    static getCategory = async (req, res, next) => {
        const result = await Services.getCategory();
		return res.status(200).send({ data: result });
    }

    static getDataS2Q3 = async (req, res, next) => {
        await Services.scrape();
        return res.status(200).send();
    }
}

export default Controller;