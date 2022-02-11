import fs from "fs";
import path from 'path';

export const _MASK = 484;
const __dirname = path.resolve();

export const ensureExists = (dir_path, mask, cb) => {
    if (typeof mask == 'function') { // Allow the `mask` parameter to be optional
        cb = mask;
        mask = _MASK;
    }

    const filePath = path.join(__dirname, dir_path);
    fs.mkdir(filePath, mask, function(err) {
        if (err) {
            if (err.code == 'EEXIST') cb(null); // Ignore the error if the folder already exists
            else cb(err); // Something else went wrong
        } else cb(null); // Successfully created folder
    });
}