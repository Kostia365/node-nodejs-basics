import { createHash } from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const calculateHash = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const readfile = fs.createReadStream(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
    const hash = createHash('sha256');
    readfile.pipe(hash).setEncoding('hex').pipe(process.stdout);
};

await calculateHash();