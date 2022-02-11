import { errorsDetails } from './responseHelper.js';
import moment from 'moment';
import { Result, validationResult } from 'express-validator';
import db from '../db/index.js';

export const isNumber = (n) => {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}

export const isEmptyObject = (obj) => {
  return (Object.keys(obj).length === 0) || (JSON.stringify(obj) === '{}');
}
export const groupBy = (xs, key) => {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const parseNumberic = (value, return_not = 0) => {
  if (isNumber(value)) {
    return parseFloat(value);
  } else {
    return return_not;
  }
}

// cbError for handle some code when code in block error 
// Such as remove uploaded file when query failed.
export async function apiSafeBlock(req, res, codeSafe, cbError = () => {}) {
  try {
    await db.begin();
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      throw errors
    }

    await codeSafe()
    await db.commit();
  } catch(err) {
    await db.rollback();
    const statusCode = err.statusCode ? err.statusCode : 500;
    cbError()
    
    // For error handling response of express-validator
    if(err instanceof Result) {
        res.status(statusCode).send(err)
    } else {
      const handleError = errorsDetails[err.message];
      const errorResponse = handleError || err.message;
      const errorCode = err.errorCode

      res.status(statusCode).send({ errorCode, message: errorResponse })
    }
  }
}

export const tempError = (name) => {
  throw new Error(`${name} is required.`);  
}

export const pickKeys = (obj, ...keys) => {
  const ObjKeys = Object.keys(obj);
  const result = {}

  for(let ele of keys) {
    if (ObjKeys.includes(ele)) {
      result[ele] = obj[ele]
    }
  }

  return result
}

// For add prefix to all of attribute in object.
export const addPrefixToObject = (prefix, obj, excludes = []) => {
  const ObjKeys = Object.keys(obj);
  let result = [];

  for(let ele of ObjKeys) {
    if (!excludes.includes(ele)) {
      result[`${prefix}_` + ele] =  obj[ele];
    }
  }

  return result;
}

// source from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
export function difference(setA, setB) {
	let _difference = new Set(setA)
	for (let elem of setB) {
			_difference.delete(elem)
	}
	return _difference
}

export const setFormatQueryParams = (query) => {
  let text_query = '';

  if (query && typeof query === 'object') {
    for (const [key, value] of Object.entries(query)) {
      if (text_query === '') text_query += `?${key}=${value}`
      else text_query += `&${key}=${value}`
    }
  }

  return text_query;
}

export const _getFilterDate = ({ dateOption, dateRange }) => {
  if (['yesterday', 'today'].includes(dateOption)) {
    let date = dateOption === 'today'
          ? moment().tz("Asia/Bangkok").format('YYYY-MM-DD')
          : moment().subtract(1, 'day').tz("Asia/Bangkok").format('YYYY-MM-DD')

    dateRange = { startDate: date, endDate: date }
    dateRange;
  } else {
    if (dateOption === 'custom' && dateRange
      && dateOption.hasOwnProperty('startDate') 
      && dateOption.hasOwnProperty('endDate')
    ) {
      dateRange = {  startDate: dateRange.startDate, endDate: dateRange.endDate }
      dateRange;
    }
  }

  return dateRange;
}

export const setFormatQuery = (query) => {
  let text_query = '';

  if (query && typeof query === 'object') {
    for (const [key, value] of Object.entries(query)) {
      if (text_query === '') text_query += `?${key}=${value}`
      else text_query += `&${key}=${value}`
    }
  }

  return text_query;
}

export const _imageEncode = (arrayBuffer) => {
  let b64encoded = Buffer.from(arrayBuffer, 'binary').toString('base64');
  let mimetype = "image/png";

  return "data:" + mimetype + ";base64," + b64encoded;
}