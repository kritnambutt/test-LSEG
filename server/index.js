// server/index.js
import express from "express";
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import { TEMPORARY_FILE_PATH } from './dotenv/config.js';
import { ensureExists, _MASK } from './utils/createDirectory.js';
import routes from './routes/index.js';

const __dirname = path.resolve();
const { config } = dotenv;
config();

const PORT = process.env.PORT || 8080;

const app = express();

const whitelist = (process.env.CORS_WHITELIST || '').split('|');
const corsOptions = {
  origin(origin, cb) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) {
      return cb(null, true);
    }

    if (whitelist.indexOf(origin) !== -1) {
      cb(null, true);
    } else {
      const errmsg = 'The CORS policy for this site does not allow access from the specified Origin.';
      cb(new Error(errmsg));
    }
  },
  exposedHeaders: ['Content-Disposition']
};

app.use(compression());
app.use(morgan("combined"));
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.enable('trust proxy');

app.use(express.json({
  limit: '50mb'
}));

app.use(express.urlencoded({
  limit: '50mb',
  extended: true
}))

ensureExists(TEMPORARY_FILE_PATH, _MASK, (err) => { if (err) { console.log(err) } });
app.use('/' + TEMPORARY_FILE_PATH, express.static(__dirname + '/' + TEMPORARY_FILE_PATH));
app.use(express.static(path.resolve(__dirname, '../front/public')));
// // Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

// Handle GET requests to /api route
app.use("/api", (req, res, next) => {
		console.log(`REQ: ${req.method} ${req.url}`);
		next();
	},
	routes
);

// // All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});