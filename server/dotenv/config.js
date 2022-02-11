// config.js
import dotenv from 'dotenv';
const { config } = dotenv;

config();

// --------------------------------
export const PORT = process.env.PORT;

export const TEMPORARY_FILE_PATH = process.env.TEMPORARY_FILE_PATH;