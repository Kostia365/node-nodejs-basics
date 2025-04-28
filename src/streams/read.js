import fs from 'fs';
import path from 'path';

const __dirname = import.meta.dirname;


const read = async () => {
    const readfile = fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'));
    readfile.pipe(process.stdout);
};

await read();